import { observable } from 'mobx';
import { db } from '../helpers/firebase';

export default class NewsStore {
  constructor() {
    db.collection('services')
      .doc('stocks')
      .onSnapshot((doc) => {
        this.stocks = doc.data();
      });
  }

  @observable stocks = {};

  @observable error = '';
}
