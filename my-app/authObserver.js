import { auth } from './firebase';

// Add an observer to check the authentication state
const checkAuthState = (callback) => {
    auth.onAuthStateChanged(callback);
};
