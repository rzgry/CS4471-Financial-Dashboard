import { observable, action, computed } from 'mobx';

export const SUBSCRIPTION_STOCKS = 'Stocks';
export const SUBSCRIPTION_CURRENCY = 'Currency';
export const SUBSCRIPTION_NEWS = 'News';

export default class AuthStore {
  @observable
  subscriptions = [];

  @observable
  avaliableServices = [SUBSCRIPTION_STOCKS, SUBSCRIPTION_CURRENCY, SUBSCRIPTION_NEWS];

  @computed
  get servicesNotSubscribedTo() {
    return this.avaliableServices.filter(x => !this.subscriptions.includes(x));
  }

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
