import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import NavBar from '../components/NavBar';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Container>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
