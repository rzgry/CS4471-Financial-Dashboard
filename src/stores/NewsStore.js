import { observable, computed } from 'mobx';
import { db } from '../helpers/firebase';

export default class NewsStore {
  constructor() {
    db.collection('services')
      .doc('news')
      .onSnapshot((doc) => {
        const { articles, timestamp } = doc.data();
        this.newsArticles = articles;
        this.timestamp = timestamp;
      });
  }

  @observable timestamp = undefined;

  @observable newsArticles = [];

  @observable error = '';

  @observable showMore = false;

  @computed get visableArticles() {
    if (!this.showMore) {
      return this.newsArticles.slice(0, 3);
    }
    return this.newsArticles;
  }
}
