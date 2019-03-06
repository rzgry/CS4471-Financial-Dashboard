import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import NavBar from '../components/NavBar';
import HomePage from './HomePage';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Container>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} /> */}
      </Container>
    </div>
  </Router>
);

export default App;