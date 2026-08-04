# Folder Structure

The Enterprise Angular Starter follows a feature-first, domain-driven architecture designed for scalability, maintainability, and enterprise applications.

---

# Principles

The folder structure is based on the following principles:

- Feature-first organization
- Standalone Angular APIs
- Clear separation of responsibilities
- High cohesion and low coupling
- Reusable shared libraries
- Lazy-load everything possible
- Strict dependency rules
- Easy onboarding for new developers

---

# Repository Structure

```text
enterprise-angular-starter/
│
├── apps/
├── libs/
├── docs/
├── tools/
├── .github/
├── package.json
├── angular.json
└── tsconfig.base.json
```

---

# apps/

Contains deployable Angular applications.

```text
apps/
└── web/
```

Example:

```text
apps/
└── web/
    ├── src/
    ├── public/
    ├── app.config.ts
    ├── app.routes.ts
    └── main.ts
```

Responsibilities:

- Bootstrap Angular
- Configure routing
- Provide application-wide providers
- Import feature libraries

Applications should contain minimal business logic.

---

# libs/

Reusable libraries live here.

```text
libs/
│
├── core/
├── shared/
├── ui/
├── auth/
├── state/
├── data-access/
├── features/
└── testing/
```

Each library has a single responsibility.

---

# core/

Contains singleton services.

Examples:

- LoggerService
- ApiService
- AuthService
- ThemeService
- ErrorHandlerService
- AppConfig

Never place UI components inside Core.

---

# shared/

Contains reusable logic that is framework-independent.

Examples:

- pipes
- directives
- validators
- utilities
- constants
- interfaces

Shared must never depend on Features.

---

# ui/

Reusable presentational components.

Examples:

```text
button/
modal/
dialog/
spinner/
input/
card/
badge/
```

UI components:

- reusable
- stateless
- configurable
- independently testable

No API calls.

No business logic.

---

# auth/

Authentication-related code.

Examples:

- login
- register
- token handling
- route guards
- interceptors
- permissions

---

# state/

Application state.

Possible implementations:

- NgRx
- Signals
- Component Store

Contains:

- actions
- reducers
- effects
- selectors
- stores

---

# data-access/

Responsible for server communication.

Contains:

- API services
- repositories
- DTOs
- mappers

No UI code.

---

# features/

Business features.

Example:

```text
features/
│
├── dashboard/
├── users/
├── reports/
└── settings/
```

Each feature is independently lazy-loaded.

---

# Feature Structure

Each feature follows the same convention.

```text
dashboard/
│
├── pages/
├── components/
├── services/
├── models/
├── store/
├── guards/
├── resolvers/
├── routes.ts
└── index.ts
```

---

## pages/

Smart components.

Responsibilities:

- orchestrate data
- communicate with services
- interact with stores

---

## components/

Dumb/presentational components.

Receive:

- Inputs
- Outputs

Contain:

- HTML
- CSS
- minimal logic

---

## services/

Feature-specific services.

Example:

```
DashboardService
DashboardFacade
DashboardApi
```

---

## models/

Feature models.

Examples:

```
Dashboard.ts
DashboardFilter.ts
DashboardResponse.ts
```

---

## store/

Feature state.

Contains:

- actions
- reducers
- selectors
- effects
- signals

---

# testing/

Reusable testing utilities.

Examples:

- mocks
- fake services
- builders
- factories
- test helpers

---

# docs/

Project documentation.

```text
docs/
│
├── architecture/
├── guides/
├── decisions/
└── images/
```

---

# tools/

Automation scripts.

Examples:

- generators
- code mods
- release scripts

---

# Dependency Rules

Allowed:

```
Features
    ↓
Data Access
    ↓
Core
```

```
Features
    ↓
UI
```

```
Features
    ↓
Shared
```

Forbidden:

```
Feature A → Feature B
```

```
UI → Data Access
```

```
Core → Feature
```

```
Shared → Feature
```

---

# Naming Conventions

Folders:

```
user-profile
order-history
report-table
```

Files:

```
user.service.ts
user.component.ts
user.routes.ts
user.model.ts
```

Classes:

```
UserService
UserComponent
UserFacade
```

Interfaces:

```
User
UserDto
UserResponse
```

---

# Design Goals

The architecture should support:

- Enterprise applications
- Multiple development teams
- Lazy loading
- High testability
- Reusability
- Long-term maintainability
- Clear ownership
- Easy onboarding