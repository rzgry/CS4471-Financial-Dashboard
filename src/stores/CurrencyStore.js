import { observable } from 'mobx';
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

  @observable base = undefined;

  @observable rates = [];

  @observable error = '';

  @observable timestamp;
}
