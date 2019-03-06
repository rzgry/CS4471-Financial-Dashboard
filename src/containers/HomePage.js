import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { authStore } from '../stores';

const LoginWarning = () => (
  <div>
    <p>
      <span>Please</span>
      {' '}
      <Link to="/login">Login</Link>
      {' '}
      <span>to view your dashboard</span>
    </p>
  </div>
);

@observer
class HomePage extends Component {
  render() {
    if (!authStore.isAuthenticated) {
      return <LoginWarning />;
    }

    return (
      <div>
        <p>
          <span>Hello </span>
          <strong>{authStore.username}</strong>
          <span>! Welcome back to your dashboard</span>
        </p>
      </div>
    );
  }
}

export default HomePage;
