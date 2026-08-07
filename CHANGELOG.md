# Changelog

All notable changes to this project will be documented in this file.

The format is inspired by Keep a Changelog and this project follows Semantic Versioning.

---

## [0.2.0] - 2026-08-07

### Added

#### Core Library

- Added **LoggerService** for centralized application logging.
- Added strongly typed logging models.
- Added comprehensive unit tests for LoggerService.

#### Configuration

- Added **ConfigService**.
- Added **APP_CONFIG** InjectionToken.
- Added strongly typed `AppConfig` interface.
- Added unit tests for ConfigService.

#### Providers

- Added `provideCore()` helper for configuring the Core library.
- Added typed provider configuration.
- Added unit tests for Core providers.

#### Error Handling

- Added **GlobalErrorHandler**.
- Integrated GlobalErrorHandler with LoggerService.
- Registered GlobalErrorHandler through `provideCore()`.
- Added unit tests for GlobalErrorHandler.

### Improved

- Established enterprise folder conventions for the Core library.
- Added public API exports for all Core modules.
- Added component-level documentation (README files).

---

## [0.1.0] - 2026-08-05

### Added

#### Workspace

- Nx Workspace
- Angular 22
- Vitest
- Husky
- Commitlint
- Prettier

#### UI Library

- Design Token system
- Button component
- Card component
- Shared UI architecture

#### Testing

- Added unit tests for Button component.
- Added unit tests for Card component.

#### Application

- Added Showcase application for component preview.
