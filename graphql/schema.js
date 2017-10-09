import { graphql, buildSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools'

import resolvers from './resolvers';

const typeDefs = `
schema {
  query: Query
  mutation: Mutation
}

type Query {
  users: [User]
  user: User
  messages: [Message]
  message: Message
  count: Int
}

type Mutation {
  addUser(name:String, password:String): User
  addMessage(user:Int!, text:String!): Message
}

type User {
  id: ID!
  name: String!
  password: String!
}

type UserInput {
  name: String!
  password: String!
}

type Message {
  id: ID!
  user: ID!
  date: Date
  text: String!
}

scalar Date {
  date: Int
}

`

const schema = makeExecutableSchema({typeDefs, resolvers})

export default schema;
