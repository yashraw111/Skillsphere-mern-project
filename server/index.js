// server/index.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { main } from './config/db.js';
import UserRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser'
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cookieParser())
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use('/api/auth', UserRoute);

main();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
