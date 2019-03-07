import React, { Component } from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { authStore } from '../stores';

@observer
class NavBar extends Component {
  render() {
    return (
      <div style={{ marginTop: '5em' }}>
        <Menu fixed="top" size="large">
          <Container>
            <Menu.Item as={Link} to="/">
              Dashboard
            </Menu.Item>
            <Menu.Item as={Link} to="/manage">
              Manage subscriptions
            </Menu.Item>
            <Menu.Item position="right">
              {authStore.isAuthenticated ? (
                <Button onClick={() => authStore.logout()}>Log out</Button>
              ) : (
                <Button color="teal" as={Link} to="/login">
                  Log in
                </Button>
              )}
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
