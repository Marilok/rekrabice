
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn next dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The changes to pages auto-update in the browser.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Development tips for this project

### Creating pull requests
Before creating pull requests lint the code and fix (if any) errors in console, otherwise changes will not be deployed.
```bash
npx next lint --fix
```

### Development in GitPod
If push is declined due to email privacy restrictions do this:

```bash
git config --global user.email "UNIQUE_MAIL@users.noreply.github.com"
git commit --amend --reset-author --no-edit
```

### Generating Supabase types
```bash
npx supabase init
npx supabase link --project-ref PROJECT_ID
npx supabase gen types typescript --linked --schema public > types/supabase.ts
```

## License
This repo is (for now) licensed under the [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) license.

