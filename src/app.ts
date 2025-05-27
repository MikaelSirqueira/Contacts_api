import express from 'express';
import contatoRoutes from './routes/contato-routes';

const app = express();
app.use(express.json());
app.use(contatoRoutes);

export default app;
