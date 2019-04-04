import { observable, computed } from 'mobx';
import { db } from '../helpers/firebase';

export default class NewsStore {
  constructor() {
    db.collection('services')
      .doc('currency')
      .onSnapshot((doc) => {
        const data = doc.data();
        this.timestamp = data.timestamp;
        this.rates = data.rates;
        this.base = data.base;
      });
      
  }

  @observable showMore = false;

  @observable base = undefined;

  @observable rates = [];

  @observable error = '';

  @observable timestamp;

  @computed get visableRates() {
    if (!this.showMore) {
      return Object.entries(this.rates).slice(0, 4);
    }
    return Object.entries(this.rates);
  }
}
