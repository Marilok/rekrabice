

## Development tips for this project

### Creating pull requests
Before creating pull requests lint the code and fix (if any) errors in console, otherwise changes will not be deployed.
```bash
npx next lint --fix
```


### Generating Supabase types
```bash
npx supabase init
npx supabase link --project-ref PROJECT_ID
npx supabase gen types typescript --linked --schema public > types/supabase.ts
```

## License
This repo is licensed under the [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) license.

