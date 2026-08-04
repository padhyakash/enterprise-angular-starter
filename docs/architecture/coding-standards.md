# Coding Standards

These standards define how code is written across the Enterprise Angular Starter.

The goal is to ensure that every contributor writes code that is:

- Consistent
- Readable
- Maintainable
- Testable
- Scalable

Following these standards reduces code review time, improves onboarding, and keeps the codebase healthy as it grows.

---

# General Principles

Always prioritize:

- Readability over cleverness
- Simplicity over complexity
- Composition over inheritance
- Explicitness over implicit behavior
- Consistency over personal preference

When in doubt, write code that the next developer can understand quickly.

---

# TypeScript

## Enable Strict Mode

The project uses TypeScript strict mode.

Do not disable compiler checks to bypass errors.

Preferred:

```ts
const user: User = getUser();
```

Avoid:

```ts
const user: any = getUser();
```

---

## Avoid `any`

Use:

- interfaces
- types
- generics
- unknown (when necessary)

Good:

```ts
function parse(value: unknown): User {
    // ...
}
```

Bad:

```ts
function parse(value: any) {}
```

---

## Prefer Interfaces for Domain Models

```ts
export interface User {
    id: number;
    name: string;
}
```

Use `type` for:

- unions
- mapped types
- utility types

---

## Use Readonly Where Possible

```ts
readonly id: number;
```

Immutable objects reduce bugs.

---

# Naming Conventions

## Files

Use kebab-case.

```
user.service.ts

dashboard.component.ts

auth.interceptor.ts
```

---

## Classes

Use PascalCase.

```ts
UserService
DashboardComponent
ApiInterceptor
```

---

## Variables

Use camelCase.

```ts
currentUser

totalAmount

selectedItems
```

---

## Constants

Use UPPER_SNAKE_CASE only for true compile-time constants.

```ts
const API_TIMEOUT = 30000;
```

Configuration values should live in configuration files rather than inline constants.

---

## Boolean Variables

Start with:

- is
- has
- can
- should

Good:

```ts
isLoggedIn

hasPermission

canEdit
```

---

# Angular

## Standalone Components Only

Always create standalone components.

```ts
@Component({
    standalone: true
})
```

NgModules are not used except when integrating legacy libraries.

---

## Use Signals for Local State

Good:

```ts
readonly count = signal(0);
```

Avoid using `BehaviorSubject` for component-local state.

Reserve RxJS for asynchronous streams and external events.

---

## Use Angular Control Flow

Preferred:

```html
@if (user()) {
    ...
}
```

Avoid:

```html
<div *ngIf="user()">
```

Use:

- @if
- @for
- @switch
- @defer (where appropriate)

---

## Lazy Load Features

Every business feature should be lazy-loaded unless there is a strong reason not to.

---

# Components

Components should have one responsibility.

If a component grows beyond ~300 lines or handles multiple concerns, consider splitting it.

---

## Smart Components

Responsibilities:

- Fetch data
- Coordinate services
- Manage state
- Handle routing

Examples:

```
DashboardPage

UserDetailsPage
```

---

## Presentational Components

Responsibilities:

- Render UI
- Emit events
- Accept Inputs

Avoid:

- API calls
- Store access
- Router navigation
- Business rules

---

# Inputs and Outputs

Prefer explicit APIs.

Good:

```ts
@Input() user!: User;

@Output() saved = new EventEmitter<void>();
```

Avoid exposing internal implementation details.

---

# Services

Each service should have one responsibility.

Good:

```
UserApiService

UserStorageService

UserPermissionService
```

Avoid "God Services" that handle unrelated concerns.

---

# Dependency Injection

Prefer constructor injection using the `inject()` function where appropriate.

```ts
private readonly http = inject(HttpClient);
```

Keep dependencies minimal.

If a service requires many dependencies, reconsider its design.

---

# RxJS

Use RxJS for:

- HTTP
- WebSockets
- Router events
- External event streams

Do not use RxJS as a replacement for local component state.

---

## Avoid Nested Subscriptions

Bad:

```ts
this.api.getUsers().subscribe(users => {
    this.api.getRoles().subscribe(...)
});
```

Good:

```ts
combineLatest([
    this.api.getUsers(),
    this.api.getRoles()
]);
```

Use operators such as:

- map
- switchMap
- exhaustMap
- concatMap
- mergeMap

Choose the operator based on the required behavior.

---

## Subscription Cleanup

Prefer Angular utilities such as `takeUntilDestroyed()` when subscribing.

Avoid manual cleanup unless necessary.

---

# Error Handling

Handle errors close to where they occur.

Provide meaningful messages for users and useful logs for developers.

Avoid swallowing errors silently.

---

# HTTP

Keep HTTP logic inside the Data Access layer.

Components should never call `HttpClient` directly.

Use typed request and response models.

---

# State Management

Use the simplest solution that meets the need.

Recommended order:

1. Signal
2. Signal Store
3. Component Store
4. NgRx Store

Avoid introducing global state prematurely.

---

# Performance

Prefer:

- OnPush change detection
- Signals
- Lazy loading
- Track expressions in `@for`
- Pure pipes
- Memoized computations

Avoid unnecessary re-renders and expensive template expressions.

---

# Accessibility

All UI components should:

- Support keyboard navigation
- Include ARIA attributes where needed
- Maintain sufficient color contrast
- Use semantic HTML

Accessibility should be considered during development, not added later.

---

# Testing

Every feature should include:

- Unit tests
- Component tests
- Integration tests where appropriate

Test behavior rather than implementation details.

Aim for meaningful coverage rather than chasing a percentage.

---

# Documentation

Public APIs should be documented.

Complex business logic should include concise comments explaining the reasoning, not the obvious implementation.

Keep README files and architecture documents up to date as the project evolves.

---

# Pull Request Checklist

Before submitting a pull request:

- Code compiles successfully
- Lint passes
- Tests pass
- No unused code
- No `console.log`
- No `any`
- No circular dependencies
- Documentation updated if needed
- Public APIs reviewed
- Performance considered

---

# Summary

These standards are intended to create a predictable and maintainable codebase that scales with both the application and the engineering team.

Consistency is more valuable than individual coding style. Every contribution should leave the codebase easier to understand than before.