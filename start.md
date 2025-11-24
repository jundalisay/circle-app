# Install dependencies
npm install -D drizzle-kit drizzle-orm @libsql/client tailwindcss@next @tailwindcss/vite
npm install -D @inlang/paraglide-sveltekit
bun i -D bcrypt zod @types/bcrypt
```

## File Structure
```
circle-app/
├── src/
│   ├── lib/
│   │   ├── server/
│   │   │   ├── db/
│   │   │   │   ├── schema.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── seed.ts
│   │   │   └── auth.ts
│   │   ├── components/
│   │   │   ├── FAB.svelte
│   │   │   ├── PostCard.svelte
│   │   │   ├── ProductCard.svelte
│   │   │   ├── ServiceCard.svelte
│   │   │   └── LanguageSwitcher.svelte
│   │   └── stores.ts
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── +layout.server.ts
│   │   ├── register/
│   │   │   └── +page.svelte
│   │   ├── login/
│   │   │   └── +page.svelte
│   │   ├── menu/
│   │   │   └── +page.svelte
│   │   ├── posts/
│   │   │   ├── +page.svelte
│   │   │   └── +page.server.ts
│   │   ├── products/
│   │   │   ├── +page.svelte
│   │   │   ├── +page.server.ts
│   │   │   ├── new/
│   │   │   │   └── +page.svelte
│   │   │   └── [id]/
│   │   │       └── +page.svelte
│   │   ├── services/
│   │   │   ├── +page.svelte
│   │   │   ├── +page.server.ts
│   │   │   ├── new/
│   │   │   │   └── +page.svelte
│   │   │   └── [id]/
│   │   │       └── +page.svelte
│   │   ├── points/
│   │   │   ├── +page.svelte
│   │   │   └── +page.server.ts
│   │   ├── profile/
│   │   │   ├── +page.svelte
│   │   │   └── +page.server.ts
│   │   ├── shops/
│   │   │   ├── +page.svelte
│   │   │   ├── +page.server.ts
│   │   │   └── [id]/
- │   │   │       ├── +page.svelte
│   │   │       └── +page.server.ts
│   │   └── transaction/
│   │       ├── new/
│   │       │   └── +page.svelte
│   │       └── +server.ts
│   └── app.css
├── local.db
├── drizzle.config.ts
└── package.json
```


Run with: `node --loader ts-node/esm src/lib/server/db/seed.ts`



## 24. Tailwind Config - `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config;
```


## 26. Package.json Scripts

```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push",
    "db:seed": "tsx src/lib/server/db/seed.ts"
  }
}
```

2. Run `bun db:generate && bun run db:push`
3. Run `bun run db:seed`
4. Start dev server: `npm run dev`

Complete implementation with: authentication, registration, posts with pagination, products/services CRUD, barter transaction system with debt/credit tracking, points dashboard with multiple tabs and statistics, shops with credit ratio sorting, profile shopfronts, mobile-responsive UI, FAB navigation, and ready for Paraglide i18n integration.