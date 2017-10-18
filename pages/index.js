// import React from 'react';
// import { render } from 'react-dom';


// export default (props) => {
//   return (
//     <div>
//       This is the index Page
//       NODE_ENV=production
//     </div>
//   );
// };

//
import { bindActionCreators } from 'redux';
import { updateResults, initStore, startClock, addCount, serverRenderClock } from '../redux/store';
import withRedux from 'next-redux-wrapper';





import React from 'react';
import { render } from 'react-dom';
import Main from '../components/Main.js';
import { elasticPeople, addPerson, allPeople } from '../components/axios/index.js';

class Index extends React.Component {
  constructor () {
    super();
    this.state = {
      results: [],
      searchMessage: 'Please enter a search'
    };
  }
//
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  getAllPeople () {
    this.setState({searchMessage: 'Loading'});
    allPeople().then((results) => {
      const resultsNum = results.data.data.allPeople.length;
      this.setState({searchMessage: 'Results: Show All'});


      this.props.updateResults(results.data.data.allPeople);


      // this.setState({ results: results.data.data.allPeople });
      if (resultsNum) window.scrollTo(0, 500);
    });
  }

  search () {
    const searchString = document.getElementById('query').value;
    this.setState({searchMessage: 'Loading'});
    elasticPeople(searchString).then((results) => {
      const resultsNum = results.data.data.elasticPeople.length;
      const s = resultsNum === 1 ? '' : 's';
      this.setState({searchMessage: resultsNum ? '' + resultsNum + ' result' + s + ' found' : 'No results found'});
      this.setState({ results: results.data.data.elasticPeople });
      if (resultsNum) window.scrollTo(0, 500);
    });
  }

  addSomeone () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const location = document.getElementById('location').value;
    this.setState({searchMessage: 'Adding ' + name});
    addPerson(name, surname, location).then(() => {
      this.setState({searchMessage: 'Added ' + name});
      this.setState({results: [] });
    });
  }

  handleEnterKey (e) {
    if (e.charCode === 13) {
      e.preventDefault();
      const id = document.activeElement.id;
      if (id === 'query') {
        this.search();
      } else if (id === 'name' || 'surname' || 'location') {
        this.addSomeone();
      };
    };
  }

  render () {
    return (
      <Main
        getAllPeople={this.getAllPeople.bind(this)}
        search={this.search.bind(this)}
        addSomeone={this.addSomeone.bind(this)}
        results={this.state.results}
        searchMessage={this.state.searchMessage}
        handleEnterKey={this.handleEnterKey.bind(this)}
      />
    );
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    updateResults: bindActionCreators(updateResults, dispatch),
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  };
};


const withReduxConfig = {
  createStore: initStore,
  storeKey: 'reduxStore',
  mapDispatchToProps: mapDispatchToProps
};


export default withRedux(withReduxConfig)(Index);
