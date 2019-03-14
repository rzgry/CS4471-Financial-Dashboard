import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import SubscriptionsPage from './SubscriptionsPage';
import { PrivateRoute, NavBar } from '../components';
import { userStore } from '../stores';

@observer
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {!userStore.authFinishedLoading && (
            <Dimmer active>
              <Loader />
            </Dimmer>
          )}
          {userStore.authFinishedLoading && (
            <div>
              <NavBar />
              <Container>
                <Route path="/" exact component={HomePage} />
                <Route path="/signup" exact component={SignupPage} />
                <Route path="/login" exact component={LoginPage} />
                <PrivateRoute
                  isAuthenticated={userStore.isAuthenticated}
                  path="/manage"
                  exact
                  component={SubscriptionsPage}
                />
              </Container>
            </div>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
