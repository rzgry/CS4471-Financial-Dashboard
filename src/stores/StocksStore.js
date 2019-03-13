import { observable, runInAction } from 'mobx';
import { db } from '../helpers/firebase';

export default class NewsStore {
  constructor() {
    // db.collection('services')
    //   .doc('stocks')
    //   .onSnapshot((doc) => {
    //     runInAction(() => {
    //       this.stocks = doc.data().stock_prices;
    //     });
    //   });
  }

  @observable stocks = [];

  @observable error = '';
}
