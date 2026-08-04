# Dependency Rules

One of the primary goals of the Enterprise Angular Starter is to maintain a clean, scalable architecture as the application grows.

This document defines the dependency boundaries between libraries and features. Every new module, service, and component should comply with these rules.

---

# Why Dependency Rules Matter

Without clear boundaries, applications tend to develop:

- Circular dependencies
- Tight coupling
- Duplicate business logic
- Difficult-to-test features
- Large refactoring costs

By enforcing dependency rules, each library has a clear responsibility and remains independently maintainable.

---

# Dependency Flow

The application follows a one-way dependency flow.

```text
                Application (apps/)
                      │
                      ▼
                 Features
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
      UI        Data Access      Shared
        │             │
        └──────┬──────┘
               ▼
             Core
```

Dependencies should always point downward. Lower-level libraries must never depend on higher-level libraries.

---

# Library Responsibilities

## apps/

Purpose:

- Bootstrap Angular
- Configure providers
- Register routes
- Compose feature libraries

Allowed dependencies:

- Features
- Core
- Shared
- UI

---

## features/

Features contain business functionality.

Examples:

- Dashboard
- Users
- Reports
- Settings

Features may depend on:

- UI
- Shared
- Core
- Data Access

Features must never depend on another feature directly.

❌ Incorrect

```text
features/dashboard
        │
        ▼
features/users
```

Instead, extract shared behavior into a reusable library.

---

## ui/

UI contains reusable presentational components.

Examples:

- Button
- Modal
- Card
- Table
- Spinner

UI components:

- Receive inputs
- Emit outputs
- Never fetch data
- Never know business rules

Allowed dependencies:

- Shared

Forbidden:

- Features
- Data Access
- Auth
- State

---

## shared/

Shared contains framework-agnostic utilities.

Examples:

- Validators
- Pipes
- Utility functions
- Constants
- Types

Allowed dependencies:

None, or only lightweight framework packages.

Shared must never depend on Features.

---

## data-access/

Responsible for external communication.

Examples:

- HTTP services
- Repositories
- DTOs
- Mappers

Allowed dependencies:

- Core
- Shared

Forbidden:

- UI
- Features

---

## core/

Contains singleton infrastructure services.

Examples:

- Logger
- Authentication
- Configuration
- Error handling
- Theme
- Storage

Core should be stable and have minimal dependencies.

Forbidden:

- Features
- UI

---

# Allowed Dependency Matrix

| From | Can Depend On |
|------|----------------|
| Apps | Features, Core, UI, Shared |
| Features | UI, Shared, Core, Data Access |
| UI | Shared |
| Data Access | Core, Shared |
| Shared | None |
| Core | Shared |

---

# Forbidden Dependencies

## Feature → Feature

Avoid direct feature imports.

Instead:

- Move common logic to Shared
- Create a reusable library
- Introduce an abstraction if needed

---

## UI → Data Access

Incorrect:

```ts
@Component({...})
export class UserCardComponent {
  constructor(private readonly api: UserApiService) {}
}
```

Correct:

```ts
@Component({...})
export class UserCardComponent {
  @Input() user!: User;
}
```

The parent component provides the data.

---

## Shared → Feature

Utilities should remain generic.

Incorrect:

```ts
shared/
    validators/
        dashboard-validator.ts
```

Correct:

```text
features/dashboard/
    validators/
```

---

## Core → Feature

Core represents application infrastructure.

Infrastructure should never know about business domains.

---

# Circular Dependencies

Circular dependencies are not allowed.

Example:

```text
Dashboard
    ↓
Users
    ↓
Dashboard
```

Consequences:

- Build issues
- Lazy-loading problems
- Runtime instability
- Difficult testing

Use tools such as ESLint boundary rules or dependency graph analysis to detect cycles early.

---

# Dependency Inversion

High-level modules should depend on abstractions rather than concrete implementations.

Instead of:

```ts
DashboardService → UserApiService
```

Prefer:

```ts
DashboardService → UserRepository
```

The repository interface can be implemented by:

- REST API
- GraphQL
- Mock service
- Local storage

This improves testability and flexibility.

---

# Lazy Loading

Every business feature should be lazy-loaded whenever possible.

Benefits:

- Smaller initial bundle
- Faster startup
- Better scalability
- Independent feature development

---

# Code Review Checklist

During every pull request, verify:

- No circular dependencies
- No feature-to-feature imports
- UI contains no business logic
- API calls are isolated to Data Access
- Core remains infrastructure-only
- Shared remains generic
- Lazy loading is preserved

---

# Summary

Following these dependency rules ensures:

- Clear separation of concerns
- Easier testing
- Better scalability
- Reduced coupling
- Predictable architecture
- Faster onboarding for new team members