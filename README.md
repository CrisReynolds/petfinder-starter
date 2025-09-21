# PetFinder Starter (Web + Backend + PostgreSQL)

Monorepo inicial para una aplicación de **búsqueda de mascotas** (perros y gatos) basada en el TDR. 
Incluye:
- **server/** Node.js + Express + Sequelize + PostgreSQL
- **web/** React (Vite) con rutas básicas
- **docker-compose.yml** para levantar PostgreSQL y Adminer

## Requisitos
- Node.js 18+ y npm
- Docker y Docker Compose (opcional pero recomendado para la DB)

## Pasos Rápidos
1) `cp server/.env.example server/.env` y ajusta variables.
2) `docker compose up -d` (levanta PostgreSQL + Adminer).
3) En `/server`: `npm install` y `npm run dev` (crea tablas automáticamente).
4) En `/web`: `cp .env.example .env` (ajusta `VITE_API_URL`) luego `npm install` y `npm run dev`.
5) Abre **http://localhost:5173** (web). Backend corre en **http://localhost:4000**.

> Adminer: http://localhost:8080  (Servidor: `db`, Usuario: `postgres`, Pass: `postgres`, DB: `petfinder`)
