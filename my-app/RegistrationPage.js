import React, { Component } from 'react';
import './RegistrationPage.css';

class RegistrationPage extends Component {
constructor() {
  super();
  this.state = {
    username: '',
    fullName: '',
    age: '',
    dateOfBirth: '',
    professionalObjective: '',
    experiences: [{ title: '', description: '' }],
  };
}
handleInputChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
}
handleExperienceChange = (event, index) => {
  const { name, value } = event.target;
  const experiences = [...this.state.experiences];
  experiences[index][name] = value;
  this.setState({ experiences });
}
handleAddExperience = () => {
  this.setState((prevState) => ({
    experiences: [...prevState.experiences, { title: '', description: '' }],
  }));
}
handleRegistration = () => {
  // Prepare the user registration data to send to the API
  const userData = {
    username: this.state.username,
    fullName: this.state.fullName,
    age: this.state.age,
    dateOfBirth: this.state.dateOfBirth,
    professionalObjective: this.state.professionalObjective,
    experiences: this.state.experiences,
  };

  // Send a POST request to your API
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (response.status === 201) {
        // Successful registration, handle accordingly
        console.log('User registered successfully');
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    })
    .catch((error) => {
      // Handle network errors
      console.error('Network error:', error);
    });
};

render() {
  return (
    <div className="registration-page">
      <h1>Registration Page</h1>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={this.state.dateOfBirth}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Professional Objective:</label>
          <input
            type="text"
            name="professionalObjective"
            value={this.state.professionalObjective}
            onChange={this.handleInputChange}
          />
        </div>
        {this.state.experiences.map((exp, index) => (
          <div key={index}>
            <div className="form-group">
              <label>Experience Title:</label>
              <input
                type="text"
                name="title"
                value={exp.title}
                onChange={(event) => this.handleExperienceChange(event, index)}
              />
            </div>
            <div className="form-group">
              <label>Experience Description:</label>
              <input
                type="text"
                name="description"
                value={exp.description}
                onChange={(event) => this.handleExperienceChange(event, index)}
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={this.handleAddExperience}>Add Experience</button>
      </form>
      <br />
      <button onClick={this.handleRegistration}>Register</button>
    </div>
  );
}
}

export default RegistrationPage;