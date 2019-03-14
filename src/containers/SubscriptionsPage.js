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

    return (
      <div>
        <h3>
          <span>Hello </span>
          <span style={{ color: '#00b5ad' }}>{userStore.user.email}</span>
          <span>! Manage your subscriptions!</span>
        </h3>
        <ul>
          {avaliableServices.map(service => (
            <li key={service}>
              <div style={{ display: 'flex', marginTop: '1em', marginBlock: '1em' }}>
                <p style={{ marginRight: '1em' }}>{service}</p>
                {userStore.user.subscriptions[service] === true ? (
                  <Button size="mini" color="red" onClick={() => userStore.unsubscribe(service)}>
                    <Icon name="close" />
                    Unsubscribe
                  </Button>
                ) : (
                  <Button size="mini" color="green" onClick={() => userStore.subscribe(service)}>
                    <Icon name="check" />
                    Subscribe
                  </Button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SubscriptionsPage;
