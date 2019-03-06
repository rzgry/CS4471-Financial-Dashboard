import { observable, action, computed } from 'mobx';

const SESSION_USERNAME = 'SESSION_USERNAME';

export default class AuthStore {
  constructor() {
    const username = sessionStorage.getItem(SESSION_USERNAME);
    if (username !== null) {
      this.username = username;
    }
  }

  @observable
  username = '';

  @computed get isAuthenticated() {
    return this.username !== '';
  }

  @action login(username) {
    this.username = username;
    sessionStorage.setItem(SESSION_USERNAME, username);
  }

  @action logout() {
    this.username = '';
    sessionStorage.removeItem(SESSION_USERNAME);
  }
}
