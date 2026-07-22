# Easy Lane frontend

The React/Vite client uses `VITE_API_BASE_URL` from `.env.example` and the centralized `src/lib/api.js` helper. It sends cookie credentials on every API request; no admin credential, password, token, or secret is stored in frontend environment variables or browser storage.

Routes: `/`, `/book-demo`, `/admin/login`, and protected `/admin`. The admin client calls `/api/admin/auth/login`, `/me`, and `/logout` through the shared API helper. See the root README for backend configuration and manual startup instructions.

No command was executed during this change.
