import React from 'react';
import { render } from 'react-dom';
import Forms from './Forms';
import Results from './Results';

import Link from 'next/link';

export default (props) => {
  return (
    <div>
      <header>Server-side: Node.js/Express, GraphQL, Mongoose.  <br />
        Frontend: React, Axios, awesomeness </header>
        <div id="hamburger" />
        <main>
          <nav>
            <Link href={'/results'}><a>Navigate to results</a></Link>
          </nav>
          <Forms
            getAllPeople={props.getAllPeople}
            search={props.search}
            addSomeone={props.addSomeone}
            handleEnterKey={props.handleEnterKey}
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
