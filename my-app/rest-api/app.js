// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./ewerson-af883-firebase-adminsdk-ayite-e06bab428e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ewerson-af883.firebaseio.com',
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

// You can use Firebase Authentication to manage user login and other operations

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
