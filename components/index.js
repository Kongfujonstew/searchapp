import React from 'react';
import { render } from 'react-dom';
import Main from '../components/Main.js';
import { elasticPeople, addPerson, allPeople } from './axios/index.js';

class Index extends React.Component {
  constructor () {
    super();
    this.state = {
      results: [],
      searchMessage: 'Please enter a search'
    };
  }

  getAllPeople () {
    this.setState({searchMessage: 'Loading'});
    allPeople().then((results) => {
      this.setState({searchMessage: 'Results'});
      console.log('results: ', results.data.data.allPeople);
      this.setState({ results: results.data.data.allPeople });
    });
  }

  search () {
    const searchString = document.getElementById('query').value;
    this.setState({searchMessage: 'Loading'});
    elasticPeople(searchString).then((results) => {
      this.setState({searchMessage: results.data.data.elasticPeople.length ? 'Results' : 'No results found'});
      console.log('results: ', results.data.data.elasticPeople);
      this.setState({ results: results.data.data.elasticPeople });
    });
  }

  addSomeone () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const location = document.getElementById('location').value;
    this.setState({searchMessage: 'Adding ' + name});
    addPerson(name, surname, location).then(() => {
      this.setState({searchMessage: 'Added ' + name});
      this.setState({results: [{ name, surname, location }] });
    });
  }

  render () {
    return (
      <Main
        getAllPeople={this.getAllPeople.bind(this)}
        search={this.search.bind(this)}
        addSomeone={this.addSomeone.bind(this)}
        results={this.state.results}
        searchMessage={this.state.searchMessage}
      />
    );
  }
};

render(<Index />, document.getElementById('main'));
