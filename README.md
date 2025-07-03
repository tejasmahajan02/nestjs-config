<h1 align="center">NestJS Multi-Environment Setup</h1>

<p align="center">
  A clean and production-ready NestJS starter with robust, fail-fast environment configuration using the <code>@nestjs/config</code> module.
</p>

## 📦 Description

This repository is a NestJS boilerplate focused on **multi-environment configuration management**.

It provides:

- Environment-specific `.env` loading via `@nestjs/config`
- Support for layered config files like `.env.common` + `.env.{environment}`
- Fail-fast validation for required `.env` files on startup
- Safe, cross-platform file path handling using `path.join`
- Clean and extensible foundation for scalable backend projects

---

## 📁 Environment Configuration

Supported environment file structure:

```

.env.common
.env.development.local
.env.development
.env.production

````

---

## 🚀 Project Setup

```bash
$ npm install
```

## 🔧 Running the App

```bash
# Run in development mode (loads .env.development, .env.local)
$ npm run start:local

# Watch mode with hot reload
$ npm run start:dev

# Run with default NODE_ENV (usually development)
$ npm run start

# Production mode (loads .env.production)
$ npm run start:prod
```

## 🧪 Testing

```bash
# Unit tests
$ npm run test

# E2E tests
$ npm run test:e2e

# Coverage
$ npm run test:cov
```

---

## 🔍 Features

* ✅ Multi-environment support via `.env.{env}`
* ✅ Shared `.env.common` for global values
* ✅ Safe path resolution (`path.join`)
* ✅ Required file validation on startup
* ✅ Joi-based environment schema validation
* ✅ Variable expansion via `${VAR}` using `expandVariables: true`
* ✅ Clean and minimal NestJS starter
* ✅ Easily extendable config logic

---

## 🛠 Tech Stack

* [NestJS](https://nestjs.com/)
* [@nestjs/config](https://docs.nestjs.com/techniques/configuration)
* [Joi](https://www.npmjs.com/package/joi)
* TypeScript

---

## 📂 Project Structure

```bash
src/
  ├── main.ts
  ├── app.module.ts
  └── config/
       └── environment-config.module.ts   # Handles env
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* [NestJS](https://nestjs.com) — for the amazing framework