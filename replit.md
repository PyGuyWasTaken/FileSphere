# FileSphere

FileSphere is a browser-only React, TypeScript, and Vite application. Keep the existing project structure and stack.

## Running on Replit

- Dependencies: `npm install` (use `npm ci` for a clean install from the lockfile).
- Start the **Start application** workflow, which runs `npm run dev`.
- The development server listens on `0.0.0.0:5000` and accepts Replit preview hosts.
- Type check: `npm run check`.
- Production build: `npm run build` (output: `dist/`).

No API keys, database service, or backend server are required. Files and preferences are stored in the current browser profile using IndexedDB and localStorage. Export a workspace backup before clearing browser data; files do not sync across browsers or devices.
