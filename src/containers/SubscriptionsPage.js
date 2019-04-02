import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Icon } from 'semantic-ui-react';
import { userStore, subscriptionStore } from '../stores';

@observer
class SubscriptionsPage extends Component {
  render() {
    const services = Object.entries(subscriptionStore.services);
    const avaliableServices = services
      .filter(([name, avaliable]) => avaliable) // eslint-disable-line no-unused-vars
      .map(([name]) => name);

    const subscribedAvaliableServices = avaliableServices.filter(
      service => userStore.user.subscriptions[service] === true,
    );
    const unsubscribedAvaliableServices = avaliableServices.filter(
      service => userStore.user.subscriptions[service] === false,
    );

    return (
      <div>
        <h3>
          <span>Hello </span>
          <span style={{ color: '#00b5ad' }}>{userStore.user.email}</span>
          <span>! Manage your subscriptions!</span>
        </h3>
        <h4>Your subscriptions: </h4>
        {subscribedAvaliableServices.length === 0 && <p>You are not subscribed to any services</p>}
        <ul>
          {subscribedAvaliableServices.map(service => (
            <li>
              <div style={{ display: 'flex', marginTop: '1em', marginBlock: '1em' }}>
                <p style={{ marginRight: '1em' }}>{service}</p>
                <Button size="mini" onClick={() => userStore.unsubscribe(service)}>
                  <Icon name="close" />
                  Unsubscribe
                </Button>
              </div>
            </li>
          ))}
        </ul>
        <h4>Avaliable services: </h4>
        {unsubscribedAvaliableServices.length === 0 && (
          <p>You are subscribed to all avaliable services</p>
        )}
        <ul>
          {unsubscribedAvaliableServices.map(service => (
            <li>
              <div style={{ display: 'flex', marginTop: '1em', marginBlock: '1em' }}>
                <p style={{ marginRight: '1em' }}>{service}</p>
                <Button size="mini" color="green" onClick={() => userStore.subscribe(service)}>
                  <Icon name="check" />
                  Subscribe
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SubscriptionsPage;
