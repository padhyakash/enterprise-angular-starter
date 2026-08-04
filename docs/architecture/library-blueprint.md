# Library Blueprint

## Purpose

This document defines the standard blueprint for every library in the Enterprise Angular Starter.

Every library must follow the same structure, naming conventions, testing strategy, and dependency rules to ensure consistency across the workspace.

---

# Design Principles

- One library should have one responsibility.
- Libraries expose a single public API.
- Internal implementation must never be imported directly.
- Libraries should be independently testable.
- Dependencies must always flow downward.
- Every library should be replaceable without affecting unrelated libraries.

---

# Library Taxonomy

The workspace is organized into the following domains.

```text
libs/

core/
shared/
ui/
feature/
data-access/
auth/
testing/
```

## Core

Infrastructure shared across the entire application.

Examples:

- Configuration
- Logging
- HTTP
- Storage
- Error handling

Core must never depend on Feature libraries.

---

## Shared

Reusable framework-agnostic code.

Examples:

- Utility functions
- Validators
- Pipes
- Directives
- Common types
- Constants

Shared should contain no business logic.

---

## UI

Reusable presentational components.

Examples:

- Button
- Card
- Dialog
- Input
- Spinner
- Table

UI libraries should be stateless whenever possible.

---

## Feature

Contains business features.

Examples:

- Dashboard
- Users
- Reports

Feature libraries orchestrate UI and Data Access libraries.

---

## Data Access

Responsible for communication with APIs and data sources.

Examples:

- Repositories
- HTTP services
- API adapters

Business logic should not live here.

---

## Auth

Authentication and authorization.

Examples:

- Login
- Guards
- Interceptors
- Token management

---

## Testing

Testing utilities shared across the workspace.

Examples:

- Test helpers
- Mock services
- Fixtures
- Builders

---

# Standard Library Structure

Every library follows the same structure.

```text
library-name/

README.md

CHANGELOG.md

project.json

eslint.config.mjs

tsconfig.json

src/

index.ts
```

---

# Public API

Each library exposes a single entry point.

```
index.ts
```

Consumers must only import from the public API.

✅ Correct

```ts
import { ButtonComponent } from '@enterprise/ui/button';
```

❌ Incorrect

```ts
import { ButtonComponent } from '../../../button/src/lib/button.component';
```

---

# Naming Conventions

Folders use kebab-case.

Examples

```text
button
card
data-access
error-handler
```

Project names should clearly describe their purpose.

---

# Dependency Direction

Dependencies always flow downward.

```text
Feature
      ↓
UI
      ↓
Shared
      ↓
Core
```

Forbidden examples

- Feature → Feature
- UI → Feature
- Shared → Feature
- Core → Feature

Nx module boundary rules will enforce these constraints.

---

# Library Tags

Each library must define tags.

Examples

```text
type:core
type:shared
type:ui
type:feature
type:data-access

scope:shared
scope:feature
scope:core
```

Tags are used to enforce architectural boundaries.

---

# Testing Requirements

Every library should include:

- Unit tests
- Public API validation
- README usage examples

Testing is considered part of the implementation, not an optional activity.

---

# Documentation Requirements

Every library should contain:

- Purpose
- Responsibilities
- Public API
- Usage examples
- Known limitations (if any)

---

# Future Enhancements

As the platform evolves, each library may additionally include:

- Storybook stories
- Accessibility tests
- Performance benchmarks
- Visual regression tests
- API documentation

---

# Guiding Principle

A library should have one clear responsibility, expose one public API, and depend only on libraries beneath it in the dependency hierarchy.

Consistency across libraries is more valuable than cleverness within an individual library.

Application
│
▼
Feature
│
▼
Data Access
│
▼
Shared
│
▼
Core
