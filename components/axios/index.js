import axios from 'axios';
const url = window.location + 'graphql';


export const allPeople = () => {
}

export const person = () => {
  console.log('count!!!!!!!'); return 2
};

export const findByName = (query) => {}
export const findByLocation = (query) => {}
export const count = () => {
  console.log('called count.')
  return axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: `query { count }`
  })
};

export const addPerson = (name, surname, location) => {
  return axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
    query: ``
  });
};



