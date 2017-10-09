import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import db from './db/index';

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './public')));

app.listen(port, () => console.log('Welcome!  Please navigate to http://localhost:' + port));
