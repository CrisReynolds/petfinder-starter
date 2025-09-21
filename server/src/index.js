import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import { sequelize } from './models/index.js';

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // En dev puedes usar { alter: true }
    app.listen(PORT, () => {
      console.log(`[server] running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('[server] DB connection error:', err);
    process.exit(1);
  }
}

bootstrap();
