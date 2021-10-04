// external;
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import path from 'path';
import { Container } from 'typedi';
// controllers
import AppController from './app.controller';

dotenv.config({
  path: path.join(__dirname, '../.env'),
});

const app = Container.get(AppController);

app.listen();

process.once('SIGTERM', () => process.exit());
