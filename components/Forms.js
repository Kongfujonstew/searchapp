import React from 'react';
import { render } from 'react-dom';
import { count, person } from './axios/index';

class Forms extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  componentDidMount() {
    count().then((count) => {
      console.log('count: ', count);
    });
  }

  render () {
    return (
      <div id="forms">
        <form className="form left">
          <h3>Search</h3>
          <input type="text" />
          <div className="button">Search</div>
        </form>
        <form className="form right">
          <h3>Add Someone</h3>
          <p>Name</p>
          <input type="text" />
          <p>Surname</p>
          <input type="text" />
          <p>Location</p>
          <input type="text" />
          <div className="button">Add</div>
        </form>
      </div>
    );
  }
};

export default Forms;

