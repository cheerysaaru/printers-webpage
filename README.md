# SL Printer

A small full-stack starter for managing print jobs.

## Stack

- Frontend: React + Vite
- Backend: Express
- Database: Prisma with SQLite by default

## Setup

From this directory:

```powershell
Copy-Item .env.example .env
npm run install:all
npm run db:generate
npm run db:push
npm run dev
```

The frontend runs at `http://localhost:5173` and the API runs at `http://localhost:4000`.

## Project layout

- `frontend/` React client
- `backend/` Express API
- `prisma/` database schema
- `uploads/` local print-file storage

# SL-printers
