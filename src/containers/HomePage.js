import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { userStore, newsStore, subscriptionStore } from '../stores';
import { FluidSegment } from '../components';
import {
  SUBSCRIPTION_STOCKS,
  SUBSCRIPTION_CURRENCY,
  SUBSCRIPTION_NEWS,
} from '../stores/SubscriptionsStore';

import StocksWidget from './StocksWidget';
import NewsWidget from './NewsWidget';
import CurrencyWidget from './CurrencyWidget';

@observer
class HomePage extends Component {
  constructor(props) {
    super(props);
    newsStore.fetchNews();
  }

  render() {
    if (!userStore.isAuthenticated) {
      return (
        <div>
          <p>
            <span>Please </span>
            <Link to="/login">Login</Link>
            <span> or </span>
            <Link to="/signup">Sign up</Link>
            <span> to view your dashboard</span>
          </p>
        </div>
      );
    }

    return (
      <div>
        <h3>
          <span>Hello </span>
          <span style={{ color: '#00b5ad' }}>{userStore.user.email}</span>
          <span>! Welcome back to your dashboard!</span>
        </h3>
        <Grid stackable>
          {userStore.user.subscriptions[SUBSCRIPTION_NEWS]
            && subscriptionStore.services[SUBSCRIPTION_NEWS] && (
              <Grid.Column width={8}>
                <FluidSegment>
                  <NewsWidget onUnsubscribe={() => userStore.unsubscribe(SUBSCRIPTION_NEWS)} />
                </FluidSegment>
              </Grid.Column>
          )}
          {userStore.user.subscriptions[SUBSCRIPTION_CURRENCY]
            && subscriptionStore.services[SUBSCRIPTION_CURRENCY] && (
              <Grid.Column width={8}>
                <FluidSegment>
                  <CurrencyWidget
                    onUnsubscribe={() => userStore.unsubscribe(SUBSCRIPTION_CURRENCY)}
                  />
                </FluidSegment>
              </Grid.Column>
          )}
          {userStore.user.subscriptions[SUBSCRIPTION_STOCKS]
            && subscriptionStore.services[SUBSCRIPTION_STOCKS] && (
              <Grid.Column width={8}>
                <FluidSegment>
                  <StocksWidget onUnsubscribe={() => userStore.unsubscribe(SUBSCRIPTION_STOCKS)} />
                </FluidSegment>
              </Grid.Column>
          )}
        </Grid>
      </div>
    );
  }
}

export default HomePage;
