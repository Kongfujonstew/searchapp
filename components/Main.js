import React from 'react';
import { render } from 'react-dom';
import Forms from './Forms';
import Results from './Results';

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      query: '',
      results: []
    };
  }

  componentDidMount() {
    console.log('Welcome.')
  }



  render () {
    return (
      <main>
        <header>Jon Michael Stewart</header>
        <div>Hello from Main</div>
        <Forms />
        <Results />
        <footer>Thanks!</footer>
      </main>
    );
  }
};

export default Main;
