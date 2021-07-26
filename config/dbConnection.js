const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/hughJackman';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((dbConnection) => {
    console.log(
      `Successfully connected to DB: ${dbConnection.connection.name}`
    );
  })
  .catch((error) => console.log(error));
