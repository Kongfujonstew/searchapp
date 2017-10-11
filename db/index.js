import mongoose from 'mongoose';
import dummyData from './dummyData';
const location = process.env.MONGODB_URI || `mongodb://localhost/searchapp`;
mongoose.connect(location);

const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Connected to db at location: ' + location);
});

const person = {
  name: 'String',
  surname: 'String',
  location: 'String'
};


const personSchema = new mongoose.Schema(person);
const Person = mongoose.model('Person', personSchema, 'people');

//Initialize database with dummy data and notify:
for (let i = 0; i < dummyData.length; i++) {
  const newPerson = dummyData[i];

  Person.update(newPerson, newPerson, {upsert: true, unique: true, autoIndexId: false}, (err) => {
    if (err) {
      console.log('err: ', err);
    } else {
      console.log('Person updated: ', newPerson.name);
    };
  });
};


// db.dropDatabase()

//example or operation:
// find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )

// const jeff = new Person({
//   name: 'jeff',
//   surname: 'tester',
//   location: 'theinternets'
// });

// jeff.save();


// Person.find({ name: 'jeff' }, (err, person) => {
//   if (err) return handleError(err);
//   console.log('person: ', person);
// })

export default Person;
