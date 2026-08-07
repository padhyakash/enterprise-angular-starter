# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and this project follows [Semantic Versioning](https://semver.org/).

---

## [0.3.0] - 2026-08-07

### ✨ Added

#### UI Library

- Added **InputComponent**.
- Added support for:
  - Label
  - Placeholder
  - Hint text
  - Error message
  - Required indicator
  - Disabled state
  - Readonly state
  - Invalid state
  - Password visibility toggle
- Implemented Angular Signals using `input()`, `signal()` and `computed()`.
- Added modern Angular control flow (`@if`).
- Added accessibility support:
  - `aria-invalid`
  - `aria-required`
  - `aria-describedby`
  - Password toggle `aria-label`
  - Password toggle `aria-pressed`

#### Testing

- Added comprehensive Vitest unit tests for `InputComponent`.

#### Showcase

- Added Input component examples to the showcase application.

#### CI/CD

- Added GitHub Actions workflow for:
  - Formatting
  - Linting
  - Unit Tests
  - Build Validation

---

## [0.2.0] - 2026-08-07

### ✨ Added

#### Core Library

- Added `LoggerService`.
- Added configurable logger support.
- Added Core providers.
- Added `GlobalErrorHandler`.
- Added configuration folder structure.
- Added Vitest unit tests for all core services.

#### Project

- Added semantic versioning.
- Added GitHub Releases.
- Improved project architecture.

---

## [0.1.0] - 2026-08-05

### ✨ Initial Release

#### UI Library

- Added `ButtonComponent`.
- Added `CardComponent`.

#### Design System

- Introduced design tokens:
  - Colors
  - Typography
  - Spacing
  - Radius
  - Shadows
  - Transitions

#### Testing

- Added Vitest configuration.
- Added unit tests for Button and Card.

#### Showcase

- Added demo application for UI components.
