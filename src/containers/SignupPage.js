import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';
import { userStore } from '../stores';

@observer
class SignupPage extends Component {
  state = { email: '', password: '' };

  signup = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (email === '') {
      this.setState({ error: 'Please enter a email address' });
      return;
    }
    if (password === '') {
      this.setState({ error: 'Please enter a password' });
      return;
    }
    this.setState({ error: '' });
    userStore.signup(email, password);
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { error, email, password } = this.state;

    if (userStore.isAuthenticated) return <Redirect to={from} />;

    return (
      <div className="signup-form">
        <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="blue" textAlign="center">
              Sign up
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value.trim() })}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={e => this.setState({ password: e.target.value.trim() })}
                />
                {error && <Message negative>{error}</Message>}
                {userStore.error && <Message negative>{userStore.error}</Message>}
                <Button color="blue" fluid size="large" onClick={this.signup}>
                  Sign up
                </Button>
              </Segment>
            </Form>
            <Message>
              Already have an account?
              {' '}
              <Link to="/login">Log In</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignupPage;
