import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SubscriptionsPage from './SubscriptionsPage';
import { PrivateRoute, NavBar } from '../components';
import { authStore } from '../stores';

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
            <PrivateRoute
              isAuthenticated={authStore.isAuthenticated}
              path="/manage"
              exact
              component={SubscriptionsPage}
            />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
