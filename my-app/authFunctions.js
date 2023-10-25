// authFunctions.js
import { auth, firestore } from './firebase';

// Function to register a user and store user data in Firestore
const registerUserAndStoreData = async (email, password, userData) => {
  try {
    // Create a new user with email and password
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Store additional user data in Firestore
    await firestore.collection('users').doc(user.uid).set(userData);

    return user;
  } catch (error) {
    // Handle registration and data storage errors
    throw error;
  }
};

export { registerUserAndStoreData };
