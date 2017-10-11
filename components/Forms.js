import React from 'react';
import { render } from 'react-dom';
import { count, person } from './axios/index';

export default (props) => {
  return (
    <div id="forms" className="container">
      <form className="form left">
        <h3>Search</h3>
        <p>Enter query</p>
        <input type="text" id="query"/>
        <div id="searchButton" className="hover"
          onClick={props.search}
        >Search</div>
      </form>
      <form className="form right">
        <h3>Add Someone</h3>
        <p>Name</p>
        <input type="text" id="name"/>
        <p>Surname</p>
        <input type="text" id="surname"/>
        <p>Location</p>
        <input type="text" id="location"/>
        <div id="addButton" className="hover"
          onClick={props.addSomeone}
        >Add</div>
      </form>
    </div>
  );
};

