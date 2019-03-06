import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div style={{ marginTop: '5em' }}>
    <Menu fixed="top" size="large">
      <Container>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/test">
          Work
        </Menu.Item>
        <Menu.Item as={Link} to="/test">
          Company
        </Menu.Item>
        <Menu.Item as={Link} to="/test">
          Careers
        </Menu.Item>
        <Menu.Item position="right">
          <Button as={Link} to="/login">
            Log in
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  </div>
);

export default NavBar;
