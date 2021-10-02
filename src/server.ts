// external;
import * as dotenv from 'dotenv';
// import cors from 'cors';
// import helmet from 'helmet';
import path from 'path';
// controllers
import AppController from './app.controller';
// env validator
// import EnvValidator from './validators/env.validator';

dotenv.config({
  path: path.join(__dirname, '../.env'),
});
// EnvValidator(process.env);
const { PORT } = process.env;
// const ROOT_PATH = path.join(__dirname, 'public');

const app = new AppController(Number(PORT));

app.listen();

process.once('SIGTERM', () => process.exit());
