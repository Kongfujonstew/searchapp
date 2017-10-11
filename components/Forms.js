import React from 'react';
import { render } from 'react-dom';
import { count, person } from './axios/index';

export default (props) => {
  return (
    <div id="forms" className="container">
      <form className="form left">
        <h3>SEARCH</h3>
        <p>Query</p>
        <input type="text" id="query"
          onKeyPress={props.handleEnterKey}
        />
        <div id="searchButton" className="hover"
          onClick={props.search}
        >Search</div>
        <div id="showAllButton" className="hover"
          onClick={props.getAllPeople}
        >Cheat & Show All</div>
      </form>
      <form className="form right">
        <h3>ADD PERSON</h3>
        <p>Name</p>
        <input type="text" id="name"
          onKeyPress={props.handleEnterKey}
        />
        <p>Surname</p>
        <input type="text" id="surname"
          onKeyPress={props.handleEnterKey}
        />
        <p>Location</p>
        <input type="text" id="location"
          onKeyPress={props.handleEnterKey}
        />
        <div id="addButton" className="hover"
          onClick={props.addSomeone}
        >Add</div>
      </form>
    </div>
  );
};

