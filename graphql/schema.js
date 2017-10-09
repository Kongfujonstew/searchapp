import { graphql, buildSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers';

const typeDefs = `
schema {
  query: Query
  mutation: Mutation
}

type Query {
  allPeople: [Person]
  person: Person
  findByName: [Person]
  findByLocation: [Person]
  count: Int
}

type Mutation {
  addPerson(name:String!, surname:String!, location:String!): Person
}

type Person {
  name:String!
  surname:String!
  location:String!
}
`

const schema = makeExecutableSchema({typeDefs, resolvers})

export default schema;
