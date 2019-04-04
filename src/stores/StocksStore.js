import { observable } from 'mobx';
import { db } from '../helpers/firebase';

export default class NewsStore {
  constructor() {
    db.collection('services')
      .doc('stocks')
      .onSnapshot((doc) => {
        this.stocks = doc.data().res;
        if (this.stocks.length > 0) {
          this.timestamp = this.stocks[0].timestamp;
        }
      });
  }

  @observable stocks = {};

  @observable error = '';

  @observable timestamp;
}
