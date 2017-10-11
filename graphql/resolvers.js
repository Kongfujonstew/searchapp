import db from '../db/index';
import { createRegex } from './helpers';

export default {
  Query: {
    allPeople: () => {
      return db.find((err, result) =>{
        if (err) {
          console.log('db error: ', err);
        } else {
          console.log('Query success.  Entries found: ', result.length);
        };
      });
    },
    person: () => {
      return [db.findOne((err, result) => {
        if (err) {
          console.log('err: ', err);
        } else {
          console.log('Query success.  Entry found: ', result);
        };
      })];
    },
    elasticPeople: (p, { searchString }) => {
      const rego = createRegex(searchString);
      if (searchString.length <= 1) { return [] }
      return db.find({$or: [{name:rego},{surname:rego},{location:rego}]}, (err, result) => {
        if (err) {
          console.log('err: ', err);
        } else {
          console.log('Query succes.  Entries found: ', result);
        }
      });
    },
    findByName:  (p, { name }) => {
      return db.find({name: name}, (err, result) => {
        if (err) {
          console.log('db error: ', err);
        } else {
          console.log('Query success.  Entries found: ', result.length);
        };
      });
    },
    findBySurname:  (p, { surname }) => {
      return db.find({surname: surname}, (err, result) => {
        if (err) {
          console.log('db error: ', err);
        } else {
          console.log('Query success.  Entries found: ', result.length);
        };
      });
    },
    findByLocation:  (p, { location }) => {
      return db.find({location: location}, (err, result) => {
        if (err) {
          console.log('db error: ', err);
        } else {
          console.log('Query success.  Entries found: ', result.length);
        };
      });
    },
    count: () => {console.log('grapql connect test'); return 2}
  },

  Mutation: {
    addPerson:  (p, {name, surname, location}) => {
      const newPerson = { name, surname, location }
      return db.update(newPerson, newPerson, {upsert: true, unique: true}, (err, result) => {
        if (err) {
          console.log('err: ', err);
        } else {
          console.log('Updated ', name);
        };
      });
    }
  }
};
