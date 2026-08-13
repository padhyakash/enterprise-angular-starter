# Enterprise Angular Starter

> A modern, scalable Angular UI foundation built with Angular, Nx, Signals, Vitest, accessibility, and reusable design patterns.

[![CI](https://github.com/padhyakash/enterprise-angular-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/padhyakash/enterprise-angular-starter/actions)
[![Latest Release](https://img.shields.io/github/v/release/padhyakash/enterprise-angular-starter)](https://github.com/padhyakash/enterprise-angular-starter/releases)
[![License](https://img.shields.io/github/license/padhyakash/enterprise-angular-starter)](https://github.com/padhyakash/enterprise-angular-starter)

## 🚀 Overview

**Enterprise Angular Starter** is a modern Angular workspace focused on building reusable, accessible, tested, and maintainable UI components and core application infrastructure.

The project is built with:

- **Angular**
- **Nx**
- **TypeScript**
- **Angular Signals**
- **Vitest**
- **SCSS**
- **Design Tokens**
- **Accessibility / ARIA**
- **GitHub Actions**

The goal is not to create a large collection of components quickly.

The goal is to establish **strong engineering patterns** that can scale as the library grows.

---

## ✨ Current Components

### UI

| Component | Status |
| --------- | ------ |
| Button    | ✅     |
| Card      | ✅     |
| Input     | ✅     |
| Icon      | ✅     |

### Core

| Feature              | Status |
| -------------------- | ------ |
| Logger Service       | ✅     |
| Configuration        | ✅     |
| Providers            | ✅     |
| Global Error Handler | ✅     |

---

## 🎨 UI Components

### Button

Supports multiple variants and sizes.

```html
<lib-button variant="primary"> Primary </lib-button>

<lib-button variant="secondary"> Secondary </lib-button>

<lib-button variant="success"> Success </lib-button>

<lib-button variant="danger"> Danger </lib-button>
```

Sizes:

```html
<lib-button size="sm">Small</lib-button>
<lib-button size="md">Medium</lib-button>
<lib-button size="lg">Large</lib-button>
```

---

### Card

A lightweight reusable content container.

```html
<lib-card>
  <h3>Enterprise Angular Starter</h3>

  <p>Reusable content inside a shared card component.</p>
</lib-card>
```

---

### Input

The Input component provides common enterprise form functionality.

```html
<lib-input label="Email" placeholder="Enter your email"> </lib-input>
```

Password input:

```html
<lib-input label="Password" type="password" [showPasswordToggle]="true"> </lib-input>
```

Supported features include:

- Label
- Placeholder
- Required state
- Disabled state
- Readonly state
- Invalid state
- Hint text
- Error message
- Password visibility toggle
- Accessibility attributes

---

### Icon

A reusable SVG-based icon component.

Currently supported:

- `eye`
- `eye-off`

```html
<lib-icon name="eye"></lib-icon>

<lib-icon name="eye-off" size="md"> </lib-icon>
```

Available sizes:

```text
sm → 16px
md → 20px
lg → 24px
```

Icons support accessibility labels and decorative `aria-hidden` behavior.

---

## 🏗️ Architecture

The workspace is organized around reusable libraries and applications.

```text
enterprise-angular-starter/
│
├── apps/
│   └── web/
│       └── Showcase application
│
├── ui/
│   └── src/
│       ├── lib/
│       │   ├── button/
│       │   ├── card/
│       │   ├── input/
│       │   ├── icon/
│       │   ├── tokens/
│       │   └── types/
│       │
│       └── index.ts
│
├── core/
│   └── src/
│       └── lib/
│           ├── logger/
│           ├── config/
│           ├── providers/
│           └── error-handler/
│
├── .github/
│   └── workflows/
│
└── CHANGELOG.md
```

---

## 🧩 Design Principles

The project follows a few core principles.

### Modern Angular

New components use Angular's modern APIs such as:

```ts
input();
signal();
computed();
```

and standalone components.

### Accessibility First

Interactive components should provide appropriate keyboard behavior and ARIA semantics.

Examples include:

- `aria-invalid`
- `aria-required`
- `aria-describedby`
- accessible button labels
- decorative icon handling

### Reusable Design Tokens

Shared styling values are centralized rather than duplicated throughout individual components.

### Testable by Default

Components and services are covered with **Vitest** tests.

### Small Public APIs

Components should expose only the configuration that consumers actually need.

### Composition Over Duplication

Reusable primitives such as `IconComponent` are composed into higher-level components rather than duplicating their implementation.

---

## 🧪 Testing

Run all UI tests:

```bash
npx nx test ui
```

Run the complete test target:

```bash
npx nx run-many -t test
```

---

## 🏗️ Build

Build the UI library:

```bash
npx nx build ui
```

Build the showcase application:

```bash
npx nx build web
```

---

## 🔍 Lint

Run UI linting:

```bash
npx nx lint ui
```

---

## 💻 Development

Start the showcase application:

```bash
npx nx serve web
```

The showcase provides examples of the available components and their supported states.

---

## 🔄 CI

The project uses GitHub Actions to validate changes.

Pull requests and pushes are validated through automated checks including:

- Formatting
- Linting
- Unit tests
- Build validation

The goal is to prevent broken code from reaching the main branch.

---

## 📦 Release History

| Version  | Release          |
| -------- | ---------------- |
| `v0.1.0` | UI Foundation    |
| `v0.2.0` | Core Foundation  |
| `v0.3.0` | Enterprise Input |
| `v0.4.0` | Icon System      |

See the [CHANGELOG](CHANGELOG.md) for detailed release information.

---

## 🗺️ Roadmap

The project is being developed incrementally.

### v0.5.0

Selection controls:

- Checkbox
- Radio
- Switch

### Future

Planned areas include:

- Textarea
- Select
- Autocomplete
- Dialog
- Drawer
- Toast
- Table
- Pagination
- Expanded icon system
- Improved documentation
- Storybook
- Automated package releases

The roadmap may evolve as the project grows.

---

## 🤝 Contributing

Contributions, suggestions, and discussions are welcome.

Before opening a pull request:

1. Create a feature branch.
2. Implement the change.
3. Add or update tests.
4. Run linting and builds locally.
5. Update documentation when necessary.
6. Open a pull request.

For component contributions, the preferred workflow is:

```text
API
 ↓
Implementation
 ↓
Styling
 ↓
Accessibility
 ↓
Tests
 ↓
Documentation
 ↓
Showcase
 ↓
Release
```

---

## 📋 Development Philosophy

This project is being built as a long-term Angular engineering project rather than as a collection of isolated UI components.

Each release focuses on establishing reusable patterns that can be applied to future components.

The priorities are:

```text
Architecture
    ↓
Accessibility
    ↓
Testability
    ↓
Consistency
    ↓
Developer Experience
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Akash Padhy**

Lead Frontend Engineer focused on Angular, TypeScript, UI architecture, and scalable frontend systems.

- GitHub: [@padhyakash](https://github.com/padhyakash)
- LinkedIn: [Akash Padhy](https://www.linkedin.com/in/padhyakash/)

---

## ⭐ Support the Project

If you find this project useful or interesting, consider giving it a ⭐ on GitHub.

Follow the project as it evolves toward its first stable `v1.0.0` release.
