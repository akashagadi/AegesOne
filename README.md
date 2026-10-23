# AegisOne

A responsive React SOC / NOC dashboard with a clean light theme, muted blue and pastel accents, spacious module cards, and subtle hover effects.

Requires Node.js 22.12 or newer. Run `npm ci`, then `npm run dev` and open the printed localhost URL. Use `npm run build` to create a production build in `dist/`, and `npm run preview` to preview it. On Windows PowerShell, use `npm.cmd` if script execution is disabled. React uses a local server, so opening index.html directly is no longer supported.

The eight module cards open a small coming-soon dialog. Monitoring is labeled as a preview; no backend or live monitoring connection is configured.

The interface uses native SVG icons. Google Fonts are optional, with local sans-serif fallbacks when offline.

SOC and NOC are separate featured panels. All eight module definitions live in `src/main.jsx`. The supplied brand logo is stored in `public/assets/`.

To deploy on Vercel, import this repository and use the included `vercel.json`. The project builds with Vite and serves `dist/`; no environment variables or backend services are required.
