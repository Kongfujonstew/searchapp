import mongoose from 'mongoose';
const location = process.env.MONGODB_URI || `mongodb://localhost/searchapp`;
mongoose.connect(location);

const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Connected to db at location: ' + location);
});


const schema = new mongoose.Schema({ queue: 'String' });


const Queue = mongoose.model('Queue', schema, 'queues');



export default db;
