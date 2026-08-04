# State Management

The Enterprise Angular Starter follows a pragmatic approach to state management.

State management should solve real problems—not introduce unnecessary complexity.

This project adopts a **progressive state management strategy**, where the simplest appropriate solution is chosen based on the scope and lifetime of the state.

---

# Guiding Principles

When deciding how to manage state:

- Keep state as close as possible to where it is used.
- Avoid global state unless it is shared across multiple features.
- Prefer Angular Signals for synchronous local state.
- Use RxJS for asynchronous event streams.
- Introduce NgRx only when global coordination provides clear value.

---

# State Hierarchy

Choose the smallest suitable scope.

```text
Component
    │
    ▼
Feature
    │
    ▼
Application
```

As the scope grows, the tooling becomes more sophisticated.

---

# Decision Matrix

| Scope | Recommended Tool |
|--------|------------------|
| Local component state | Signals |
| Shared state within a feature | Signal Store / Component Store |
| Shared state across multiple features | NgRx Store |
| Remote server data | Data Access services + caching |
| Application configuration | Core services |

Always start with the simplest option.

---

# Component State

Component state belongs to a single component.

Examples:

- Selected tab
- Expanded panel
- Modal visibility
- Search text
- Current page

Use Angular Signals.

```ts
readonly search = signal('');
readonly loading = signal(false);

readonly selectedTab = signal('overview');
```

Avoid introducing stores for state that never leaves the component.

---

# Computed State

Derived values should use `computed()`.

```ts
readonly filteredUsers = computed(() =>
  this.users().filter(user => user.active)
);
```

Avoid duplicating derived data.

---

# Effects

Use `effect()` for side effects.

Examples:

- Persisting preferences
- Logging
- Synchronizing local state
- Triggering non-UI updates

Avoid mutating unrelated state inside effects.

---

# Feature State

When multiple components within a feature share state, introduce a feature-level store.

Suitable tools:

- Signal Store
- Component Store

Examples:

- Dashboard filters
- Wizard progress
- Shopping cart
- Report configuration

Feature stores should not become application-wide stores.

---

# Global Application State

Use NgRx Store only for state that is:

- Shared across features
- Long-lived
- Central to the application
- Frequently updated from multiple sources

Examples:

- Authenticated user
- User permissions
- Tenant information
- Application settings
- Feature flags

Avoid placing temporary UI state in the global store.

---

# Remote Server Data

Remote data is not application state.

It should remain in the Data Access layer.

Responsibilities:

- Fetch data
- Cache responses
- Handle retries
- Map DTOs to domain models

Components consume domain models, not raw HTTP responses.

---

# State Ownership

Each piece of state should have a single owner.

Good:

```text
DashboardPage
    │
    ▼
DashboardStore
```

Avoid multiple components modifying the same state independently.

---

# Immutable Updates

Always update state immutably.

Good:

```ts
this.users.update(users => [
  ...users,
  newUser
]);
```

Avoid mutating existing objects or arrays in place.

---

# Data Flow

State should flow in one direction.

```text
User Action
      │
      ▼
Component
      │
      ▼
Store / Service
      │
      ▼
Signal Update
      │
      ▼
UI Refresh
```

Predictable data flow simplifies debugging and testing.

---

# Avoid Duplicate State

Store each piece of information once.

Bad:

```ts
users
activeUsers
inactiveUsers
```

Good:

```ts
users
```

Derive additional values using `computed()`.

---

# Loading State

Represent loading explicitly.

```ts
readonly loading = signal(false);
```

For more complex scenarios, use an object.

```ts
readonly state = signal({
  loading: false,
  error: null,
  data: []
});
```

Avoid multiple boolean flags that can become inconsistent.

---

# Error State

Keep error state close to the feature.

Example:

```ts
readonly error = signal<string | null>(null);
```

Global error handling should be reserved for infrastructure-level failures.

---

# Caching

Cache data only when it provides measurable value.

Examples:

- Lookup tables
- User profile
- Application configuration

Avoid caching data that changes frequently unless there is a clear invalidation strategy.

---

# State Lifetimes

Understand how long state should exist.

| Lifetime | Example |
|----------|---------|
| Temporary | Open modal |
| Page | Dashboard filters |
| Session | Logged-in user |
| Persistent | Theme preference |

The lifetime should influence where the state is stored.

---

# Anti-Patterns

Avoid:

- Global stores for local UI state
- Multiple sources of truth
- Mutable state
- Nested subscriptions managing state
- Business logic inside components
- Sharing state through unrelated services

---

# Testing

State management should be easy to test.

Test:

- Initial state
- State transitions
- Derived values
- Error handling
- Side effects

Avoid testing framework internals.

---

# Summary

The Enterprise Angular Starter follows a layered approach:

1. Signals for local state
2. Signal Store or Component Store for feature state
3. NgRx Store for application-wide state
4. Data Access services for remote data

By choosing the simplest appropriate tool, the codebase remains easier to understand, maintain, and scale.