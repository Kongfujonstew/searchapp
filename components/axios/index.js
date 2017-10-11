import axios from 'axios';
const url = window.location + 'graphql';

export const allPeople = () => {
  return axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: `query {
      allPeople {
        name
        surname
        location
      }
    }`
  });
};

export const person = () => {
  return axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: `query {
      person {
        name
        surname
        location
      }
    }`
  });
};

export const elasticPeople = (query) => {
  return axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: `query { count }`
  });
};

export const findByName = (name) => {
  return axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: `query {
      findByName (name:"${name}") {
        name
        surname
        location
      }
    }`
  });
};

export const findBySurname = (surname) => {
  return axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: `query {
      findBySurname (surname:"${surname}") {
        name
        surname
        location
      }
    }`
  });
};

export const findByLocation = (location) => {
  return axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: `query {
      findByLocation (location:"${location}") {
        name
        surname
        location
      }
    }`
  });
};

export const count = () => {
  console.log('called count.')
  return axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: `query { count }`
  });
};

export const addPerson = (name, surname, location) => {
  console.log('variables: ', name, surname, location);
  return axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: `mutation {
      addPerson(name:"${name}", surname:"${surname}", location:"${location}") {
        name
      }
    }`
  });
};
