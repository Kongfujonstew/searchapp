import mongoose from 'mongoose';
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
}

const personSchema = new mongoose.Schema(person);
const Person = mongoose.model('Person', personSchema, 'people');

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
