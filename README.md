# Nx + Angular + Tailwind CSS v4

A demonstration project showcasing the integration of **Nx monorepo**, **Angular 20**, and **Tailwind CSS v4** with modern build tooling and component architecture.

## About This Project

This project demonstrates how to effectively combine:

- **Nx** - Powerful monorepo tooling for managing multiple applications and libraries
- **Angular 20** - Modern Angular framework with standalone components
- **Tailwind CSS v4** - Latest version of Tailwind with native CSS nesting and improved performance
- **Vite** - Fast build tooling for development and production

### Key Features Demonstrated

- Nx monorepo workspace structure with Angular applications and libraries
- Tailwind CSS v4 integration with Angular components
- Using `@apply` directive with nested CSS and semantic naming
- Component-scoped styles with `@reference` directive
- Modern Angular standalone components
- PostCSS configuration with Tailwind v4
- Vite-powered development server

## Prerequisites

- Node.js (v20 or higher recommended)
- pnpm (v8 or higher)

If you don't have pnpm installed:

```bash
npm install -g pnpm
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nx-ng-tw-v4
```

2. Install dependencies:

```bash
pnpm install
```

## Running the Project

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

## Project Structure

```text
nx-ng-tw-v4/
├── apps/
│   └── angular-app/              # Main Angular application
│       └── src/
│           └── styles.css        # Global Tailwind CSS imports
├── packages/
│   └── features/
│       └── tailwind-component-test/  # Feature library
│           └── src/lib/
│               ├── tailwind-component-test/     # Example component
│               └── another-tailwind-component/  # Card component demo
└── .postcssrc.json              # PostCSS configuration
```

## Tailwind CSS v4 Integration

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

### Custom Theme Colors

This project demonstrates how to create a centralized custom color palette using Tailwind v4's `@theme` directive.

#### Theme Definition

Custom colors are defined in `apps/angular-app/src/theme.css`:

```css
@theme {
  --color-brand-50: #f0f9ff;
  --color-brand-100: #e0f2fe;
  --color-brand-200: #bae6fd;
  --color-brand-300: #7dd3fc;
  --color-brand-400: #38bdf8;
  --color-brand-500: #0ea5e9;
  --color-brand-600: #0284c7;
  --color-brand-700: #0369a1;
  --color-brand-800: #075985;
  --color-brand-900: #0c4a6e;
  --color-brand-950: #082f49;
}
```

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

### Key Differences in Tailwind v4

- Use `@reference "tailwindcss"` in component CSS files
- Use `@reference` for theme files to avoid CSS duplication
- Gradient classes: `bg-linear-to-r` instead of `bg-gradient-to-r`
- Native CSS nesting support
- Improved performance with PostCSS
- Custom colors defined with `@theme` directive using CSS custom properties

## Nx Commands

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

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console »](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful Links

Learn more:

- [Nx Documentation](https://nx.dev)
- [Angular Documentation](https://angular.dev)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins)

Join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow Nx on X](https://twitter.com/nxdevtools)
- [Nx YouTube channel](https://www.youtube.com/@nxdevtools)
- [Nx Blog](https://nx.dev/blog)
