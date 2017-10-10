import db from '../db/index';

export default {
  Query: {
    allPeople: () => {},
    person: () => {},
    findByName:  (query) => {},
    findByLocation:  (query) => {},
    count: () => {console.log('count!!!!!!!'); return 2}
  },
  Mutation: {
    addPerson:  (name, surname, location) => {}
  }
};
