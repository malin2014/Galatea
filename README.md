This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## -----------------------------------

App structure

### ✅ Why Structure Matters:

1. **Clarity**: AI agents rely on patterns and context. Clear directory and file naming help the agent infer relationships between files (e.g., `components/Button.tsx` vs `helpers/utils.js`).
2. **Scoping**: Good structure helps the agent identify which parts of the codebase are relevant for a task.
3. **Context Limitations**: Many AI tools have token limits per chunk of context. Messy or huge files may be truncated or misunderstood.
4. **Documentation & Metadata**: Readme files, comments, and consistent code style all help the agent "reason" better.

---

### 🧱 Ideal Project Structure Example (React/TypeScript):

<!-- ```
my-app/
├── README.md
├── package.json
├── tsconfig.json
├── public/
│   └── index.html
├── src/
│   ├── index.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── Button.tsx
│   │   └── Header.tsx
│   ├── hooks/
│   │   └── useAuth.ts
│   ├── pages/
│   │   └── Home.tsx
│   ├── utils/
│   │   └── formatDate.ts
│   └── types/
│       └── User.ts
``` -->

---

### ✅ Best Practices for AI-Friendly GitHub Projects:

| Area                     | Best Practice                                                                     |
| ------------------------ | --------------------------------------------------------------------------------- |
| **Directory Structure**  | Group files logically: `components/`, `hooks/`, `pages/`, `utils/`, etc.          |
| **README.md**            | Include clear project overview, how to run/build, architecture notes if relevant. |
| **File Naming**          | Use consistent, descriptive names (e.g., `UserCard.tsx` instead of `u1.tsx`).     |
| **Code Comments**        | Add docstrings/comments for complex logic or public APIs.                         |
| **Types**                | Use TypeScript or clearly defined JS docs for better type inference.              |
| **Avoid Monolith Files** | Split large files (>300 lines) into manageable pieces.                            |
| **Tests**                | Keep tests in a parallel structure (`__tests__` or `.test.tsx` next to source).   |
| **Exports**              | Prefer named exports so agents can reason about usage/imports better.             |

---

### 📦 Bonus: Use AI-Friendliness Tags

Some tools like [LangChain](https://www.langchain.com/), [Flowise](https://flowiseai.com/), and [PrivateGPT](https://github.com/imartinez/privateGPT) benefit from:

- `index.ts` files re-exporting modules for easy crawling
- `.md` files describing key modules
- `metadata.json` or manifest files for custom agent configs

---

Site map

### **Recipe App Sitemap (Text Hierarchy)**

<!-- ```
Home (/)
│
├── Browse Recipes (/browse)
│   ├── Categories (/browse/categories)
│   │   ├── Breakfast (/browse/categories/breakfast)
│   │   ├── Lunch (/browse/categories/lunch)
│   │   ├── Dinner (/browse/categories/dinner)
│   │   ├── Desserts (/browse/categories/desserts)
│   │   └── Vegan (/browse/categories/vegan)
│   │
│   ├── Popular (/browse/popular)
│   ├── Latest (/browse/latest)
│   └── Quick Meals (<30 mins) (/browse/quick)
│
├── Search (/search)
│   ├── By Keyword (/search?q=chicken)
│   ├── By Ingredient (/search/ingredients)
│   └── Advanced Filters (/search/filters)
│
├── Recipe Details (/recipe/{id}-{name})
│   ├── Ingredients (/recipe/{id}-{name}/ingredients)
│   ├── Steps (/recipe/{id}-{name}/steps)
│   ├── Reviews (/recipe/{id}-{name}/reviews)
│   └── Save to Favorites (★)
│
├── User Profile (/user/{username})
│   ├── My Recipes (/user/{username}/recipes)
│   ├── Favorites (/user/{username}/favorites)
│   ├── Meal Plans (/user/{username}/meal-plans)
│   └── Settings (/user/{username}/settings)
│
├── Create Recipe (/create-recipe)
│   ├── Upload Photo (/create-recipe/upload)
│   ├── Add Ingredients (/create-recipe/ingredients)
│   └── Add Steps (/create-recipe/steps)
│
├── Meal Planner (/meal-planner)
│   ├── Weekly Plan (/meal-planner/weekly)
│   └── Generate Grocery List (/meal-planner/grocery-list)
│
├── About (/about)
├── Contact (/contact)
└── Help/FAQ (/help)
``` -->

---

### **Key Features**:

1. **Browse & Discover**
   - Categories (Breakfast, Lunch, etc.), trending recipes, and quick filters.
2. **Search & Filters**
   - Search by keyword, ingredient, or dietary restrictions (e.g., gluten-free).
3. **Recipe Pages**
   - Detailed view with ingredients, steps, and user reviews.
4. **User Profiles**
   - Personalized saves, meal plans, and recipe creation.
5. **Meal Planner**
   - Weekly plans + auto-generated grocery lists.

### **Optional Add-ons**:

- **Social Features**: Sharing, comments, or cooking clubs.
- **Subscription Tiers**: Premium recipes or ad-free experience.
- **AI Suggestions**: "Surprise Me" random recipe generator.
