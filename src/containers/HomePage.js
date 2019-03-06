import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Grid, Statistic } from 'semantic-ui-react';
import { authStore, newsStore } from '../stores';
import FluidSegment from '../components/FluidSegment';
import ArticlesList from '../components/Articles';

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
  constructor(props) {
    super(props);
    newsStore.fetchNews();
  }

  render() {
    if (!authStore.isAuthenticated) {
      return <LoginWarning />;
    }

    return (
      <div>
        <h3>
          <span>Hello </span>
          <span style={{ color: '#00b5ad' }}>{authStore.username}</span>
          <span>! Welcome back to your dashboard!</span>
        </h3>

        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <FluidSegment>
                <h4>Stocks</h4>
                <Statistic color="green" label="Money" value="10,000,000" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ligula
                  ex. Praesent volutpat scelerisque euismod. In nec augue at risus aliquam pharetra.
                  Pellentesque accumsan porta leo, at dapibus sapien rutrum in. Aliquam erat
                  volutpat.
                </p>
              </FluidSegment>
            </Grid.Column>
            <Grid.Column width={8}>
              <FluidSegment>
                <h4>Currency</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu ligula
                  ex. Praesent volutpat scelerisque euismod. In nec augue at risus aliquam pharetra.
                  Pellentesque accumsan porta leo, at dapibus sapien rutrum in. Aliquam erat
                  volutpat. Ut suscipit augue ac metus interdum bibendum. Pellentesque nec
                  consectetur lectus. Aliquam scelerisque turpis magna, sed semper nulla euismod
                  eget. Maecenas in posuere leo, quis dictum nulla. Suspendisse tincidunt ipsum
                  vitae venenatis aliquam. Aliquam erat volutpat. Phasellus iaculis hendrerit est,
                  nec venenatis leo rutrum vel.
                </p>
              </FluidSegment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <FluidSegment>
                <h4>News</h4>
                <ArticlesList articles={newsStore.newsArticles} />
              </FluidSegment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
