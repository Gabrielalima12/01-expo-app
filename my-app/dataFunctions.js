import { firestore } from './firebase';

// Add a user document to Firestore
const addUserToFirestore = (uid, userData) => {
    return firestore.collection('users').doc(uid).set(userData);
};
