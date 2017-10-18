import express from 'express';
import { parse } from 'url';
import next from 'next';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { graphql } from 'graphql';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import admin from './templates/admin'
import schema from './graphql/schema.js';

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

  server.post('/graphql', (req, res) => {
    // console.log('body on request: ', req.body)
    graphql(schema, req.body.query)
    .then((result) => {
      // console.log('result', result);
      res.send(JSON.stringify(result));
    });
  });

  server.use('/admin', (req, res) => {
    res.send(admin);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});


