# Nx + Angular + Tailwind CSS v4

A demonstration project showcasing the integration of **Nx monorepo**, **Angular 20**, and **Tailwind CSS v4** with modern build tooling and component architecture.

## [⚡ Demo](https://stackblitz.com/~/github.com/relliv/nx-ng-tw-v4)

## 📖 About This Project

This project demonstrates how to effectively combine:

- **Nx** - Powerful monorepo tooling for managing multiple applications and libraries
- **Angular 20** - Modern Angular framework with standalone components
- **Tailwind CSS v4** - Latest version of Tailwind with native CSS nesting and improved performance
- **Vite** - Fast build tooling for development and production

### Key Features Demonstrated

- Nx monorepo workspace structure with Angular applications and libraries
- Tailwind CSS v4 integration with Angular components
- Custom theme colors with centralized color palette management
- Dark mode support with automatic and manual toggle
- Using `@apply` directive with nested CSS and semantic naming
- Component-scoped styles with `@reference` directive
- Modern Angular standalone components with signals
- PostCSS configuration with Tailwind v4
- Vite-powered development server

## ✅ Prerequisites

- Node.js (v20 or higher recommended)
- pnpm (v8 or higher)

If you don't have pnpm installed:

```bash
npm install -g pnpm
```

## 🚀 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nx-ng-tw-v4
```

1. Install dependencies:

```bash
pnpm install
```

## ▶️ Running the Project

### Development Server

Start the Angular application in development mode:

```bash
pnpm start
```

Or using Nx directly:

```bash
npx nx serve angular-app
```

The application will be available at `http://localhost:4200`

### Build for Production

```bash
npx nx build angular-app
```

### Run Tests

```bash
npx nx test angular-app
```

## 📁 Project Structure

```text
nx-ng-tw-v4/
├── apps/
│   └── angular-app/              # Main Angular application
│       └── src/
│           ├── styles.css        # Global Tailwind CSS imports
│           ├── theme.css         # Custom theme colors & dark mode
│           └── app/
│               ├── app.ts        # App component with dark mode toggle
│               ├── app.html      # App template
│               └── app.css       # App styles
├── packages/
│   └── features/
│       └── tailwind-component-test/  # Feature library
│           └── src/lib/
│               ├── tailwind-component-test/     # Example component
│               └── another-tailwind-component/  # Card component demo
└── .postcssrc.json              # PostCSS configuration
```

## 🎨 Tailwind CSS v4 Integration

This project demonstrates Tailwind CSS v4 features:

### Global Styles

In `apps/angular-app/src/styles.css`:

```css
@import "tailwindcss";
```

### Component-Level Styles with @apply

For component-specific CSS files, use the `@reference` directive:

```css
@reference "tailwindcss";

.card {
  @apply max-w-md mx-auto rounded-xl shadow-lg;

  .header {
    @apply bg-linear-to-r from-blue-600 to-blue-800;
  }
}
```

> **Note:** The `@apply` directive allows you to use Tailwind utility classes within your CSS. Learn more in the [Tailwind CSS documentation](https://tailwindcss.com/docs/functions-and-directives#apply-directive).

### Custom Theme Colors

This project demonstrates how to create a centralized custom color palette using Tailwind v4's `@theme` directive.

#### Theme Definition

Custom colors are defined in `apps/angular-app/src/theme.css` using a two-layer approach with CSS variables:

```css
/* CSS variables for light mode */
:root {
  --brand-50: #f0f9ff;
  --brand-100: #e0f2fe;
  /* ... more shades ... */
  --brand-900: #0c4a6e;
  --brand-950: #082f49;
}

/* Map CSS variables to Tailwind theme */
@theme {
  --color-brand-50: var(--brand-50);
  --color-brand-100: var(--brand-100);
  /* ... more shades ... */
  --color-brand-900: var(--brand-900);
  --color-brand-950: var(--brand-950);
}
```

This approach allows dynamic color changes for dark mode support.

#### Using Custom Colors in Global Styles

In `apps/angular-app/src/styles.css`:

```css
@import 'tailwindcss';
@reference './theme.css';
```

#### Using Custom Colors in Components

In component CSS files, reference both Tailwind and the theme:

```css
@reference "tailwindcss";
@reference "../../../../../../apps/angular-app/src/theme.css";

.testa {
  @apply bg-brand-500 border-brand-900 text-brand-800;
}
```

> **Note:** The `@reference` directive is used to include Tailwind utilities without generating duplicate CSS. Learn more in the [Tailwind CSS documentation](https://tailwindcss.com/docs/functions-and-directives#reference-directive).

#### Available Brand Colors

Once the theme is referenced, you can use the brand colors with any Tailwind utility:

- `bg-brand-{50-950}` - Background colors
- `text-brand-{50-950}` - Text colors
- `border-brand-{50-950}` - Border colors
- `ring-brand-{50-950}` - Ring colors
- And more...

#### Customizing the Palette

To customize the color palette, simply edit the hex values in `apps/angular-app/src/theme.css`. All components that reference the theme will automatically use the updated colors.

### Dark Mode Support

This project includes a fully functional dark mode implementation with both automatic and manual controls.

#### Features

- **Toggle Button** - Fixed position button in the top-right corner to manually switch themes
- **System Preference Support** - Automatically adapts to OS dark mode preference via `prefers-color-scheme`
- **Smooth Transitions** - Background and text colors transition smoothly (0.3s ease)
- **Adaptive Colors** - Brand color palette inverts for better contrast in dark mode

#### Implementation

The dark mode system uses CSS custom properties that change based on the `.dark` class:

```css
/* Light mode (default) */
:root {
  --brand-500: #0ea5e9;
}

/* Dark mode */
.dark {
  --brand-500: #0ea5e9; /* Adjusted for dark backgrounds */
}

/* Tailwind theme references these variables */
@theme {
  --color-brand-500: var(--brand-500);
}
```

#### Manual Toggle

Click the moon/sun button in the top-right corner, or programmatically toggle:

```typescript
// In your component
toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}
```

The app component (`apps/angular-app/src/app/app.ts`) includes a complete dark mode toggle implementation using Angular signals.

### Key Differences in Tailwind v4

- Use `@reference "tailwindcss"` in component CSS files
- Use `@reference` for theme files to avoid CSS duplication
- Gradient classes: `bg-linear-to-r` instead of `bg-gradient-to-r`
- Native CSS nesting support
- Improved performance with PostCSS
- Custom colors defined with `@theme` directive using CSS custom properties

## 🛠️ Nx Commands

### Visualize Project Graph

```bash
npx nx graph
```

### Run Any Task

```bash
npx nx <target> <project-name>
```

### Generate New Library

```bash
npx nx g @nx/angular:library packages/my-lib
```

### Sync TypeScript References

```bash
npx nx sync
```

## 💻 Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console »](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## 🔗 Useful Links

Learn more:

- [Nx Documentation](https://nx.dev)
- [Angular Documentation](https://angular.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Semantic Class Names](https://css-tricks.com/semantic-class-names/)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins)

Join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow Nx on X](https://twitter.com/nxdevtools)
- [Nx YouTube channel](https://www.youtube.com/@nxdevtools)
- [Nx Blog](https://nx.dev/blog)
