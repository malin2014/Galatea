## Getting Started

npm run dev

## App structure

<!-- ```
my-app/
├── README.md
├── package.json
├── tsconfig.json
├── public/
├── src/
│   ├── app/
│   ├── common/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── types/
``` -->

✅ React Functional App Best Practices

1. Project Structure

Organize files by feature/domain (/features/recipes/, /features/auth/)
Separate concerns: /components/, /hooks/, /types/, /api/, /store/

2. Component Design

Use functional components only (function ComponentName())
Ensure components follow Single Responsibility Principle
Break down UI into reusable components
Keep components under 200 lines where possible

3. Hooks Usage

Use built-in hooks: useState, useEffect, useMemo, useCallback
Extract repetitive logic into custom hooks (useToggle.ts, useRecipeData.ts)
Avoid placing side effects directly in useEffect if logic is complex
Do not call hooks conditionally

4. State Management

Use local state (useState) for UI elements (modals, toggles)
Use Redux Toolkit + Sagas or Zustand for app-wide state
Normalize complex data in state using byId, allIds patterns
Use createSlice for modular Redux logic

5. Typing & TypeScript

Use TypeScript with strict mode
Type all props (interface RecipeCardProps { ... })
Never use any; prefer unknown with narrowing
Type API responses and application state explicitly

6. UI & Styling

Use utility-first CSS (Tailwind) or CSS Modules
Avoid inline styles unless dynamic (e.g., style={{ height: dynamicValue }})
Extract color themes and constants into a config file
Use meaningful class names and consistent layout structure

7. Performance

Use React.memo for pure components
Use useMemo / useCallback for expensive calculations or stable refs
Avoid inline functions in JSX
Implement lazy loading using React.lazy + Suspense
Paginate long lists; avoid rendering >100 items at once

8. API & Data Fetching

Use custom hooks (useRecipesQuery, useCreateRecipeMutation)
Debounce search inputs (e.g., useDebounce())
Use fetch/axios/TanStack Query with retries and error handling
Store API config (base URLs, endpoints) in one place

9. Testing

Use React Testing Library to test behavior, not implementation
Write unit tests for all custom hooks
Mock API calls in tests
Snapshot test for critical UI components

10. Code Quality & Tooling

Use ESLint with React + TypeScript rules
Format code with Prettier
Set up Husky pre-commit hooks for linting + formatting
Use meaningful, consistent naming for files and variables
Avoid deeply nested logic—refactor when nesting exceeds 3 levels

11. Environment & Config

Use .env for sensitive config (e.g., API keys)
Never hardcode secrets or URLs
Validate required environment variables on startup

12. Accessibility & UX

Use semantic HTML tags (<button>, <label>, <main>, etc.)
Add aria-label, role, tabIndex for interactive elements
Ensure keyboard navigation works for all controls
Add loading and error states for async UI

13. Deployment Ready

Ensure build is production-optimized (yarn build or vite build)
Strip console logs from production build
Use dynamic imports to reduce bundle size
Include README with setup, scripts, and folder structure
