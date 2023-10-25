import React, { Component } from 'react';
import './RegistrationPage.css';
import firebase from 'firebase/app';
import 'firebase/auth';

class RegistrationPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '', // Change "username" to "email"
      fullName: '',
      age: '',
      professionalObjective: '',
      experiences: [{ title: '', description: '' }],
      password: '',
      passwordConfirmation: '',
    };
  }

  // ... (Other methods and functions)

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // ... (Other methods and functions)

  handleRegistration = async () => {
    if (this.state.password !== this.state.passwordConfirmation) {
      alert('Password and password confirmation do not match.');
      return;
    }

    const { email, password } = this.state;

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password); // Use "email" as the username

      // User registration successful
      alert('User registered successfully');
    } catch (error) {
      // Handle registration error
      console.error('Registration failed', error.message);
    }
  }

  render() {
    return (
      <div className="registration-page">
        <h1>Registration Page</h1>
        <form>
          {/* Update "username" to "email" in the input field names */}
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email" // Change the input type to "email"
              name="email" // Change "username" to "email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          {/* ... (Other form fields) */}
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password Confirmation:</label>
            <input
              type="password"
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              onChange={this.handleInputChange}
            />
          </div>
          {/* ... (Other form fields) */}
          <button onClick={this.handleRegistration}>Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationPage;
