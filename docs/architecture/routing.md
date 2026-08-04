# Routing Architecture

The Enterprise Angular Starter uses Angular's standalone router with a feature-first, lazy-loaded architecture.

The routing strategy is designed to:

- Minimize initial bundle size
- Keep features isolated
- Scale to large applications
- Support role-based access control
- Enable future micro-frontend adoption

---

# Guiding Principles

- Every business feature should be lazy-loaded.
- Keep routing configuration close to the feature.
- Avoid a central route file containing every route.
- Route definitions should remain simple and declarative.
- Guards control access, not business logic.
- Resolvers load essential data before rendering only when necessary.

---

# Route Hierarchy

```text
Application
    │
    ▼
Shell
    │
    ├── Dashboard
    ├── Users
    ├── Reports
    ├── Settings
    └── Profile
```

Each feature owns its own routing configuration.

---

# Application Routes

The root application should only compose features.

Example:

```ts
export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/app-layout.component').then((m) => m.AppLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('@features/dashboard/routes').then((m) => m.DASHBOARD_ROUTES),
      },
      {
        path: 'users',
        loadChildren: () => import('@features/users/routes').then((m) => m.USER_ROUTES),
      },
    ],
  },
];
```

The root router should never contain feature-specific logic.

---

# Feature Routes

Each feature owns its own `routes.ts`.

Example:

```text
dashboard/
    routes.ts
```

```ts
export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard.page').then((m) => m.DashboardPage),
  },
];
```

Benefits:

- Better modularity
- Easier maintenance
- Independent development
- Cleaner code reviews

---

# Route Naming

Use lowercase kebab-case.

Good:

```text
/users
/user-profile
/order-history
/system-settings
```

Avoid:

```text
/UserProfile
/User_Profile
```

URLs should be predictable and human-readable.

---

# Lazy Loading

Every feature should be lazy-loaded unless it is required during application startup.

Benefits:

- Faster initial load
- Smaller bundles
- Independent deployment potential
- Better scalability

Avoid eager-loading large business features.

---

# Route Guards

Guards determine whether navigation is allowed.

Examples:

- Authentication
- Authorization
- Feature flags
- Tenant restrictions

Guards should:

- Return quickly
- Avoid expensive API calls
- Remain free of UI logic

---

# Authorization

Role checks belong in guards or dedicated authorization services.

Example:

```ts
canActivate: [authGuard, permissionGuard];
```

Avoid embedding permission checks directly inside components.

---

# Resolvers

Resolvers load required data before route activation.

Use resolvers when the page cannot function without the data.

Examples:

- User profile
- Tenant configuration
- Initial application settings

Avoid resolvers for optional or frequently refreshed data.

---

# Route Parameters

Use descriptive parameter names.

Good:

```text
/users/:userId
/orders/:orderId
/projects/:projectId
```

Avoid generic names such as:

```text
/:id
```

Meaningful parameter names improve readability.

---

# Query Parameters

Use query parameters for:

- Filtering
- Sorting
- Pagination
- Search
- View preferences

Example:

```text
/users?page=2&sort=name&status=active
```

Avoid storing application state in query parameters unless it improves usability or shareability.

---

# Route Data

Use route metadata for static configuration.

Example:

```ts
data: {
  title: 'Dashboard',
  breadcrumb: 'Dashboard',
  permission: 'dashboard.view'
}
```

Avoid placing dynamic business logic in route data.

---

# Navigation

Prefer Angular's Router for navigation.

Good:

```ts
this.router.navigate(['users', userId]);
```

Avoid constructing URLs manually.

---

# Breadcrumbs

Generate breadcrumbs from route metadata.

Example:

```text
Home
  /
Users
  /
Details
```

Keep breadcrumb labels centralized in route configuration.

---

# Wildcard Routes

Always define a fallback route.

Example:

```ts
{
  path: '**',
  redirectTo: 'not-found'
}
```

Provide dedicated pages for:

- 404
- 403
- 500

---

# Route Organization

Each feature should organize pages logically.

Example:

```text
users/
│
├── pages/
│   ├── list/
│   ├── details/
│   ├── create/
│   └── edit/
│
├── components/
├── services/
├── models/
├── routes.ts
```

Keep feature-specific routing within the feature.

---

# Preloading Strategy

Do not preload every feature by default.

Choose a strategy based on application needs.

Examples:

- No preloading
- Selective preloading
- Custom preloading strategy

Large enterprise applications often benefit from selective preloading of commonly used features.

---

# Deep Linking

Every significant application state should be reachable via a URL when appropriate.

Examples:

- Report filters
- Selected tabs
- Search terms
- Pagination

Deep linking improves:

- Bookmarking
- Sharing
- Browser navigation
- User experience

---

# Error Handling

Navigation failures should be handled gracefully.

Examples:

- Invalid route parameters
- Missing resources
- Unauthorized access

Display user-friendly pages instead of leaving the application in an inconsistent state.

---

# Routing Checklist

Before adding a new route:

- Is the feature lazy-loaded?
- Does the route belong to the correct feature?
- Are guards required?
- Are resolvers necessary?
- Is the URL descriptive?
- Are route parameters meaningful?
- Is metadata complete?
- Is deep linking supported where appropriate?

---

# Summary

The routing architecture emphasizes:

- Feature ownership
- Lazy loading
- Clear separation of concerns
- Declarative configuration
- Predictable navigation
- Scalability for enterprise applications
