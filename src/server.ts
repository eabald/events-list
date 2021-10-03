// external;
import * as dotenv from 'dotenv';
import path from 'path';
// controllers
import AppController from './app.controller';

dotenv.config({
  path: path.join(__dirname, '../.env'),
});
const { PORT } = process.env;

const app = new AppController(Number(PORT));

app.listen();

process.once('SIGTERM', () => process.exit());
