import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
