# Easy Lane MERN website

## Folders and entry points

- `frontend/` — React/Vite website. The browser entry is `frontend/src/main.jsx`.
- `backend/` — Express/Mongoose API. The backend entry is `backend/src/server.js` and listens on `PORT` (default `5000`).

## Frontend API configuration

Set `VITE_API_BASE_URL` in `frontend/.env` from `frontend/.env.example`. Use `http://localhost:5000/api` for separately hosted local frontend/API processes. When the value is omitted, Vite development proxies relative `/api` requests to port `5000`; production deployments should set an absolute API URL or provide a reverse proxy.

The centralized client in `frontend/src/lib/api.js` safely joins paths and always sends `credentials: 'include'`.

## Admin session flow

1. `POST /api/admin/auth/login` accepts `{ adminId, password }`.
2. Backend compares the values against `ADMIN_ID` and `ADMIN_PASSWORD`, creates a signed, HttpOnly session cookie, and returns safe admin metadata only.
3. `/admin` calls `GET /api/admin/auth/me`; missing or expired sessions redirect to `/admin/login`.
4. `POST /api/admin/auth/logout` clears the cookie and returns the user to the login page.

Admin credentials and signing secrets exist only in `backend/.env`; never place them in a Vite environment file.

## API endpoints

- `GET /api/health` → `{ "success": true, "message": "Easy Lane API is running" }`
- `POST /api/admin/auth/login`
- `GET /api/admin/auth/me`
- `POST /api/admin/auth/logout`
- `GET /api/admin/metrics`
- `GET /api/admin/leads`, `GET/PATCH /api/admin/leads/:id`
- `POST /api/admin/leads/:id/notes`, `GET /api/admin/leads-export`
- `PATCH /api/admin/content`
- `POST /api/leads`, `GET /api/content`

## Required environment variables

`frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

`backend/.env`:

```env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:5173
MONGODB_URI=
ADMIN_ID=
ADMIN_PASSWORD=
JWT_SECRET=
JWT_EXPIRES_IN=8h
COOKIE_NAME=easylane_admin_session
```

`CLIENT_URL` is the sole allowed CORS origin and cookies are enabled. Development cookies use `httpOnly: true`, `sameSite: lax`, and `secure: false`; production cookies use `secure: true`.

## ERR_CONNECTION_REFUSED troubleshooting

This error means no process is listening at the configured API host/port. Confirm `PORT` and `VITE_API_BASE_URL` agree, that backend dependencies are installed, and that the backend process reports it is listening. A MongoDB failure is logged separately; it does not prevent the API listener or environment-only admin login from starting, though database endpoints will report an API error until MongoDB is available.

## Manual commands to run later

After installing dependencies in each folder, start the backend with `npm start` from `backend`, then start the frontend with `npm run dev` from `frontend`. Use `GET http://localhost:5000/api/health` to check the API listener.

## Files created

- `backend/package.json`, `backend/.env.example`, `backend/src/config.js`, `db.js`, `auth.js`, `app.js`, `server.js`, and models.
- `frontend/.env.example`, `frontend/src/lib/api.js`, `frontend/src/lib/router.js`, and admin/booking pages.

## Files modified

- `frontend/vite.config.js`, `frontend/src/App.jsx`, `frontend/src/components/Hero.jsx`, `frontend/src/components/Navbar.jsx`, `frontend/src/pages/Home.jsx`, `frontend/src/pages/AdminLogin.jsx`, and `frontend/src/pages/AdminDashboard.jsx`.
- `backend/src/app.js`, `backend/src/auth.js`, `backend/src/config.js`, `backend/src/server.js`, and `backend/.env.example`.

No command, install, build, server, test, migration, seed, watcher, or background process was run during this change.
