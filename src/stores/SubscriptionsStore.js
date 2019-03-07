import { observable, action } from 'mobx';

export const SUBSCRIPTION_STOCKS = 'Stocks';
export const SUBSCRIPTION_CURRENCY = 'Currency';
export const SUBSCRIPTION_NEWS = 'News';

export const ALL_SERVICES = [SUBSCRIPTION_STOCKS, SUBSCRIPTION_CURRENCY, SUBSCRIPTION_NEWS];

export default class AuthStore {
  @observable
  subscriptions = [];

  @action subscribe(service) {
    if (!this.subscriptions.includes(service)) {
      this.subscriptions.push(service);
    }
  }

  @action unsubscribe(service) {
    if (this.subscriptions.includes(service)) {
      const index = this.subscriptions.indexOf(service);
      if (index > -1) {
        this.subscriptions.splice(index, 1);
      }
    }
  }
}
