import React, { Component } from 'react';
import './LoginPage.css'; // Import a CSS file for styling

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin = () => {
    const { username, password } = this.state;
    // Implement your login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  }

  handleSignUp = () => {
    const { username, password } = this.state;
    // Implement your sign-up logic here
    console.log(`Signing up with username: ${username} and password: ${password}`);
  }

  render() {
    return (
      <div className="login-page">
        <h1>Login Page</h1>
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
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
        <div className="button-group">
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleSignUp}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
