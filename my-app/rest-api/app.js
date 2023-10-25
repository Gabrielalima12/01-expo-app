const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./ewerson-af883-firebase-adminsdk-ayite-e06bab428e.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ewerson-af883.firebaseio.com',
});

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Example data (you'll replace this with Firebase Firestore)
const users = [];

// Routes
app.get('/users', async (req, res) => {
try {
    const userDocs = await admin.firestore().collection('users').get();
    const users = userDocs.docs.map((doc) => doc.data());
    res.json(users);
} catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'An error occurred' });
}
});

app.post('/users', async (req, res) => {
const newUser = req.body;
try {
    const userRef = await admin.firestore().collection('users').add(newUser);
    newUser.id = userRef.id;
    res.status(201).json(newUser);
} catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred' });
}
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
