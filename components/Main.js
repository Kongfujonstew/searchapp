import React from 'react';
import { render } from 'react-dom';
import Forms from './Forms';
import Results from './Results';

export default (props) => {
  return (
    <div>
      <header>Server-side: Node.js/Express, GraphQL, Mongoose.  <br />
        Frontend: React, Axios, awesomeness </header>
        <main>
          <Forms
            search={props.search}
            addSomeone={props.addSomeone}
          />
          <Results
            results={props.results}
            searchMessage={props.searchMessage}
          />
        </main>
      <footer>Jon Michael Stewart</footer>
    </div>
  );
};
