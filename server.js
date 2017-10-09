import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import admin from './templates/admin'

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './public')));

// app.use('/graphiql', graphiqlExpress({
//   endPointURL: '/graphql'
// }));

// app.use(bodyParser.json());

// app.post('/graphql', (req, res) => {
//   console.log('req.body: ', req.body);
//   graphql(schema, req.body.query)
//   .then((result) => {
//     console.log('result', result);
//     res.send(JSON.stringify(result/*, null, 2*/));
//   });
// });

app.use('/admin', (req, res) => {
  res.send(admin);
});

app.listen(port, () => console.log('Welcome!  Please navigate to http://localhost:' + port));
