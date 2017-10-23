import React from 'react';
import { render } from 'react-dom';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux/store';

//apollo


import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Link from 'next/link'

const client = new ApolloClient({
  createNetworkInterface: createNetworkInterface({uri: 'http://localhost:3000/graphql'})
});

const Person = ({data: {loading, error, findByName}}) => {
  if (loading) {
    return <p>Loading . . . </p>;
  }
  console.log(findByName);

  return <div className="container">
    Hello from PersonWithData
    {findByName.length ? findByName.map((result, index) => {
      const { name, surname, location } = result;
      return <div className="card" key={index}>
        <Link href={`/view?name=${name}`} ><p>{name || '<noname>'} {surname}</p></Link>
        <p>{'Location: ' + location}</p>

      </div>
    }) : null}
  </div>
}

const PersonQuery = gql`
  query ($name:String) {
    findByName(name: $name) {
      name
      surname
      location
    }
  }
`

const PersonWithData = graphql(PersonQuery, {
  options: (props) => ({ variables: { name: props.name } })
})(Person);

// const PersonWithData = graphql(gql`
//     query {
//       findByName(name: "Janis") {
//         name
//         surname
//         location
//       }
//     }
//   `)(Person);

class View extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  componentDidMount() {
    this.setState({name: location.href.substring(location.href.lastIndexOf('=') + 1)});
  }

  static getInitialProps ({ store, isServer, pathname, query }) {
    if (isServer) return {};
    else {
      return store.getState();
    }
  }

  render () {
    return (
      <ApolloProvider client={client}>
        <div id="view">
          Hello from view. name is ={this.state.name}
          <PersonWithData name={this.state.name}/>
        </div>
      </ApolloProvider>
    );
  }
};





const mapStateToProps = (state) => {
  return {};
}

// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// }

const withReduxConfig = {
  createStore: initStore,
  storeKey: 'reduxStore',
  mapStateToProps: mapStateToProps
}

export default withRedux(withReduxConfig)(View);
