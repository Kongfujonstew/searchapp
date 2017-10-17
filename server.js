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
    console.log('body on request: ', req.body)
    graphql(schema, req.body.query)
    .then((result) => {
      console.log('result', result);
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


//IMPORTANT . .  .

//as is what the browser uses; next uses the href stuff

// <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
//   ...
// </Link>

//change your package.json

// "scripts": {
//   "dev": "node server.js",
//   "build": "next build",
//   "start": "NODE_ENV=production node server.js",

//   "test": "jest",
//   "test:watch": "jest --watch",
//   "test:coverage": "jest --coverage"
// }

//other installs: 
 // babel-preset-es2015, enzyme, jest, and react-addons-test-utils.

//directory structure:
// - (root)/
//     - __tests__/
//         - pages/
//             - index.test.js
//         - components/
//             - hello.test.js
//     - pages/
//         - index.js
//     - components/
//         - hello.js



//.babelrc:

// {
//   "env": 
  // {
  //   "development": {
  //     "presets": ["next/babel"]
  //   },
  //   "production": {
  //     "presets": ["next/babel"]
  //   },
  //   "test": {
  //     "presets": ["es2015", "next/babel"]
  //   }
  // }


// }


// next.config.js:

// const webpack = require('webpack');
// require('dotenv').config();
// module.exports = {
//   webpack: config => {
//     config.plugins.push(
//       new webpack.DefinePlugin({
//         'process.env.API_HOST': JSON.stringify(process.env.API_HOST),
//         'process.env.PORT': JSON.stringify(process.env.PORT)
//       })
//     );
//     return config;
//   }
// };

//styled-jsx: <style jsx>{'css string here . . .'}</style>


//ORIGINAL:

// import express from 'express';
// import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
// import { graphql } from 'graphql';
// import morgan from 'morgan';
// import bodyParser from 'body-parser';
// import path from 'path';

// import admin from './templates/admin'
// import schema from './graphql/schema.js';

// const app = express();
// const port = process.env.PORT || 8080;

// app.use(morgan('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/graphiql', graphiqlExpress({
//   endPointURL: '/graphql'
// }));

// app.use(bodyParser.json());

// app.post('/graphql', (req, res) => {
//   console.log('body on request: ', req.body)
//   graphql(schema, req.body.query)
//   .then((result) => {
//     console.log('result', result);
//     res.send(JSON.stringify(result));
//   });
// });

// app.use('/admin', (req, res) => {
//   res.send(admin);
// });

// app.listen(port, () => console.log('Welcome!  Please navigate to http://localhost:' + port));

