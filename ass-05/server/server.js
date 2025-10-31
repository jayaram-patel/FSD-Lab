const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5002;
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ass05';

app.use(cors({
    origin:"*",
    methods:["GET","POST","PUT","DELETE", "OPTIONS"],
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/users', require('./routes/users'));

mongoose
  .connect(mongoUri, { dbName: 'ass05' })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error', err);
    process.exit(1);
  });