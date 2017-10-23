import express from 'express';
import { parse } from 'url';
import next from 'next';
import { graphiqlExpress } from 'graphql-server-express';
import { graphql } from 'graphql';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import admin from './templates/admin'
import schema from './graphql/schema.js';

//

import graphqlHTTP from 'express-graphql'
// const graphqlHTTP = require('express-graphql');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  // CUSTOM ROUTES GO HERE
  server.get('/results', (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params);
    return app.render(req, res, '/results', mergedQuery);
  });

  server.get('/admin', (req, res) => {
    res.send(admin);
  });

  server.use(express.static(path.resolve(__dirname, './public')));
  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS 
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.use(morgan('dev'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.use('/graphiql', graphiqlExpress({
    endPointURL: '/graphql'
  }));

  server.use(bodyParser.json());

  server.post('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
  }));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});


