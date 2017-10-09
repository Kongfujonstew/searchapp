import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { graphql } from 'graphql';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import admin from './templates/admin'
import schema from './graphql/schema.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './public')));

app.use('/graphiql', graphiqlExpress({
  endPointURL: '/graphql'
}));

app.use(bodyParser.json());

app.post('/graphql', (req, res) => {
  graphql(schema, req.body.query)
  .then((result) => {
    console.log('result', result);
    res.send(JSON.stringify(result/*, null, 2*/));
  });
});

app.use('/admin', (req, res) => {
  res.send(admin);
});

app.listen(port, () => console.log('Welcome!  Please navigate to http://localhost:' + port));
