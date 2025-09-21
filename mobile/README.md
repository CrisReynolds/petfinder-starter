# Mobile (React Native / Expo)

Para crear el proyecto móvil con React Native (Expo):

```bash
npm i -g expo-cli
npx create-expo-app mobile
# Dentro de mobile:
npm install
npm run start
```

La app móvil consumirá la **misma API** del backend (`/server`). Reutiliza lógica de llamadas en un archivo `api.js` similar al de `web`.
