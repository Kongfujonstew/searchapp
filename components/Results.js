import React from 'react';
import { render } from 'react-dom';
import { Card } from './Card';

export default (props) => {
  return (
    <div id="results">
      <h3 id="searchMessage">{props.searchMessage}</h3>
      <div id="cards">
        {props.results.length ? props.results.map((result, index) => {
          document.getElementById('cards').className='container';
          const { name, surname, location } = result;
          return <div className="card" key={index}>
            <p>{name || '<noname>'} {surname}</p>
            <p>{'Location: ' + location}</p>
          </div>
        }) : null}
        {props.results.length ? <div id="return" className="hover"
          onClick={() => window.scrollTo(0,0)}
        >Return to top</div>: null}
      </div>
    </div>
  );
};

