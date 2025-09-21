import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import petRoutes from './routes/pets.routes.js';

const app = express();

app.use(helmet());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));

app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, ts: Date.now() });
});

app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);

export default app;
