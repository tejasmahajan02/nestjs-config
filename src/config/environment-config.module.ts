import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { existsSync } from 'fs';
import * as Joi from 'joi';

export enum Environment {
  Local = 'development.local',
  Development = 'development',
  Production = 'production',
}

// Convert the NODE_ENV to match one of the valid environments in the enum
const ENV = Object.values(Environment).includes(
  process.env.NODE_ENV as Environment,
)
  ? (process.env.NODE_ENV as Environment)
  : Environment.Local;

// Note : dotenv gives higher precedence to variables defined in the FIRST file loaded.
const envFilePath = [
  join(process.cwd(), '.env.common'),
  join(process.cwd(), `.env.${ENV}`),
];

for (const file of envFilePath) {
  if (!existsSync(file)) {
    throw new Error(`Environment file not found: ${file}`);
  }
}

const validationSchema = Joi.object({
  NODE_PORT: Joi.number().port().default(3000),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      cache: true,
      expandVariables: true,
      validationSchema,
      validationOptions: {
        abortEarly: false, // show all errors
        allowUnknown: true, // allow variables not in schema
        stripUnknown: true, // remove unknowns
      },
    }),
  ],
})
export class EnvironmentConfigModule {}
