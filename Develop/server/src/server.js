import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import sequelize from './config/connection.js';

import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5433;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
