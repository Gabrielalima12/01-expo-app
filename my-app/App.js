// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import 'Switch' from 'react-router-dom'
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/registration" component={RegistrationPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
