import React from 'react';
import { render } from 'react-dom';
import { Card } from '../components/Card';

//
import Link from 'next/link'
import withRedux from 'next-redux-wrapper';
import { updateResults, initStore } from '../redux/store';


/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (if any)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/


class Pages extends React.Component {
  constructor (props) {
    super(props);
  }

  static getInitialProps ({ store, isServer, pathname, query }) {
    const newState = store.getState();
    console.log('gIP caleld, isServer: ', isServer)
    if (isServer) return {};
    else return newState;
  }


  render () {
    return (
      <div id="results">
        <div>RESULTS</div>
        <h3 id="searchMessage">{'search message'}</h3>
        <div id="cards">
          {this.props.results.length ? this.props.results.map((result, index) => {
            document.getElementById('cards').className='container';
            const { name, surname, location } = result;
            return <div className="card" key={index}>
              <p>{name || '<noname>'} {surname}</p>
              <p>{'Location: ' + location}</p>
            </div>
          }) : null}
          {this.props.results.length ? <div id="return" className="hover"
            onClick={() => window.scrollTo(0,0)}
          >Return to top</div>: null}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};

const withReduxConfig = {
  createStore: initStore,
  storeKey: 'reduxStore',
  mapStateToProps: mapStateToProps
}

export default withRedux(withReduxConfig)(Pages);


//
// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'


// const store = () => createStore(reducer, {results: [{surname: 'bobydeen'}]}, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// export default withRedux(store, null, null)(connect(state => state)(({ results }) => {
//   return <PagesClass results={results} />
// }));







//
// import Link from 'next/link'
// import { connect } from 'react-redux'
// import withRedux from 'next-redux-wrapper';
// import { updateResults, initStore } from '../redux/store';

// import React from 'react';
// import { render } from 'react-dom';
// import { Card } from '../components/Card';

// const Pages = connect(state => state)(({ results }) => {
//   return (
//     <div id="results">
//       <div>NEW RESULTS</div>
//       <h3 id="searchMessage">{props.searchMessage}</h3>
//       <div id="cards">
//         {results.length ? results.map((result, index) => {
//           document.getElementById('cards').className='container';
//           const { name, surname, location } = result;
//           return <div className="card" key={index}>
//             <p>{name || '<noname>'} {surname}</p>
//             <p>{'Location: ' + location}</p>
//           </div>
//         }) : null}
//         {results.length ? <div id="return" className="hover"
//           onClick={() => window.scrollTo(0,0)}
//         >Return to top</div>: null}
//       </div>
//     </div>
//   );
// });



// export default withRedux(initStore, null, mapDispatchToProps)(Pages);


