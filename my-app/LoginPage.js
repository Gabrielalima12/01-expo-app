import React, { Component } from 'react';
import './LoginPage.css'; // Import a CSS file for styling
import firebase from 'firebase/app';
import 'firebase/auth';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      username: '', // Adicione o campo "username" para registro
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleLogin = async () => {
    const { email, password } = this.state;

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Se o login for bem-sucedido, exiba um popup de sucesso
      alert('Login bem-sucedido');
    } catch (error) {
      // Se o login falhar, exiba um popup de erro
      alert('Falha no login: ' + error.message);
    }
  }

  handleSignUp = async () => {
    const { email, password, username } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // O usuário foi criado com sucesso, você pode adicionar informações adicionais ao usuário
      // ou realizar outras ações necessárias aqui
      alert('Cadastro bem-sucedido');
    } catch (error) {
      // Se a criação de usuário falhar, exiba um popup de erro
      alert('Falha no cadastro: ' + error.message);
    }
  }

  render() {
    return (
      <div className="login-page">
        <h1>Login Page</h1>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
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
