import express from 'express';
import githubRoutes from './src/routes/githubRoutes.js';

const app = express();
app.use(express.json());

// Usar as rotas
app.use('/', githubRoutes);

app.listen(3000, () => console.log('Server listening on port 3000'));