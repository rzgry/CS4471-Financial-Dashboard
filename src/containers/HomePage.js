import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { authStore, newsStore, subscriptionStore } from '../stores';
import { FluidSegment } from '../components';
import {
  SUBSCRIPTION_STOCKS,
  SUBSCRIPTION_CURRENCY,
  SUBSCRIPTION_NEWS,
} from '../stores/SubscriptionsStore';

import StocksWidget from './StocksWidget';
import NewsWidget from './NewsWidget';
import CurrencyWidget from './CurrencyWidget';

const SUBSCRIPTION_WIDGETS = {
  [SUBSCRIPTION_STOCKS]: () => <StocksWidget />,
  [SUBSCRIPTION_CURRENCY]: () => <CurrencyWidget />,
  [SUBSCRIPTION_NEWS]: () => <NewsWidget />,
};

@observer
class HomePage extends Component {
  constructor(props) {
    super(props);
    newsStore.fetchNews();
  }

  render() {
    if (!authStore.isAuthenticated) {
      return (
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
    }

    return (
      <div>
        <h3>
          <span>Hello </span>
          <span style={{ color: '#00b5ad' }}>{authStore.username}</span>
          <span>! Welcome back to your dashboard!</span>
        </h3>
        {subscriptionStore.subscriptions.length === 0 && (
          <p>
            You do not have any subscriptions. Please manage your subscriptions on the
            {' '}
            <Link to="/manage">manage page</Link>
          </p>
        )}
        <Grid stackable>
          {subscriptionStore.subscriptions.map(subscription => (
            <Grid.Column width={8}>
              <FluidSegment>
                <Button
                  size="tiny"
                  color="red"
                  onClick={() => subscriptionStore.unsubscribe(subscription)}
                >
                  <Icon name="close" />
                  Unsubscribe
                </Button>
                {SUBSCRIPTION_WIDGETS[subscription]()}
              </FluidSegment>
            </Grid.Column>
          ))}
        </Grid>
      </div>
    );
  }
}

export default HomePage;
