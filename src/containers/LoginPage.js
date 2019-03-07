import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';
import { authStore } from '../stores';

@observer
class LoginPage extends Component {
  state = { username: '' };

  login = (e) => {
    e.preventDefault();
    const { username } = this.state;
    if (username === '') {
      this.setState({ error: 'Please enter a username' });
      return;
    }
    this.setState({ error: '' });
    authStore.login(username);
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { error, username } = this.state;

    if (authStore.isAuthenticated) return <Redirect to={from} />;

    return (
      <div className="login-form">
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  value={username}
                  onChange={e => this.setState({ username: e.target.value.trim() })}
                />
                {/* <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                /> */}
                {error && <Message negative>{error}</Message>}
                <Button color="teal" fluid size="large" onClick={this.login}>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
