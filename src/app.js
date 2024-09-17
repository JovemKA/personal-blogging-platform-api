import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { articleRouter } from './routes/articleRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', articleRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
