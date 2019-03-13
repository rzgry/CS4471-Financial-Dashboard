import {
  observable, action, computed, runInAction,
} from 'mobx';
import { db } from '../helpers/firebase';

export const SUBSCRIPTION_STOCKS = 'stocks';
export const SUBSCRIPTION_CURRENCY = 'currency';
export const SUBSCRIPTION_NEWS = 'news';

export default class SubscriptionStore {
  constructor() {
    db.collection('services')
      .doc('available_services')
      .onSnapshot((doc) => {
        runInAction(() => {
          this.services = doc.data();
        });
      });
  }

  @observable
  subscriptions = {
    stocks: false,
    currency: false,
    news: false,
  };

  @observable
  services = {
    stocks: false,
    currency: false,
    news: false,
  };

  @computed get stocksWidgetVisable() {
    return this.subscriptions.stocks === true && this.servicesAvaliable.stocks === true;
  }

  @action subscribe(service) {
    this.subscriptions[service] = true;
  }

  @action unsubscribe(service) {
    this.subscriptions[service] = false;
  }
}
