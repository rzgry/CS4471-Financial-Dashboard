import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Icon } from 'semantic-ui-react';
import { authStore, subscriptionStore } from '../stores';
import { ALL_SERVICES } from '../stores/SubscriptionsStore';

@observer
class SubscriptionsPage extends Component {
  render() {
    // get a list of services user is not subscribed to
    const servicesNotSubscribedTo = ALL_SERVICES.filter(
      x => !subscriptionStore.subscriptions.includes(x),
    );

    return (
      <div>
        <h3>
          <span>Hello </span>
          <span style={{ color: '#00b5ad' }}>{authStore.username}</span>
          <span>! Manage your subscriptions!</span>
        </h3>

        <h4>Your subscriptions</h4>
        <ul>
          {subscriptionStore.subscriptions.map(subscription => (
            <li>
              <div style={{ display: 'flex', marginTop: '1em', marginBlock: '1em' }}>
                <p style={{ marginRight: '1em' }}>{subscription}</p>
                <Button
                  size="mini"
                  color="red"
                  onClick={() => subscriptionStore.unsubscribe(subscription)}
                >
                  <Icon name="close" />
                  Unsubscribe
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <h4>Avaliable services</h4>
        {servicesNotSubscribedTo.length === 0 && (
          <p>You have subscribed to all avaliable services</p>
        )}
        {servicesNotSubscribedTo !== 0 && (
          <ul>
            {servicesNotSubscribedTo.map(service => (
              <li>
                <div style={{ display: 'flex', marginTop: '1em', marginBlock: '1em' }}>
                  <p style={{ marginRight: '1em' }}>{service}</p>
                  {' '}
                  <Button
                    size="mini"
                    color="green"
                    onClick={() => subscriptionStore.subscribe(service)}
                  >
                    <Icon name="check" />
                    Subscribe
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default SubscriptionsPage;
