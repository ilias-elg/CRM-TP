# CRM MERN

CRM (React, Express, Node.js, MongoDB Atlas) déployé sur Vercel.

## Installation

```
cd backend
npm install
cd ../frontend
npm install
```

## Lancement

```
# Backend (dans backend/)
npm run dev

# Frontend (dans frontend/)
npm start
```

## Variables nécessaires

| Variable | Où | En local | Sur Vercel |
|---|---|---|---|
| MONGODB_URI | Backend | URI Atlas | URI Atlas |
| FRONTEND_URL | Backend | http://localhost:3000 | Adresse du frontend Vercel |
| PORT | Backend | 4000 | À ne pas définir |
| REACT_APP_API_URL | Frontend | http://localhost:4000/api/clients | Adresse du backend Vercel + /api/clients |
