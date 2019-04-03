import {
  toJS, observable, action, computed,
} from 'mobx';
import { db, auth } from '../helpers/firebase';

export default class UserStore {
  constructor() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection('users')
          .doc(user.uid)
          .onSnapshot((doc) => {
            if (doc.data().uid === auth.currentUser.uid) {
              this.user = doc.data();
            }
            this.authFinishedLoading = true;
          });
      } else {
        this.authFinishedLoading = true;
        this.user = {};
      }
    });
  }

  @observable
  authFinishedLoading = false;

  @observable
  user = {};

  @observable
  error = '';

  @computed get isAuthenticated() {
    return this.user.uid !== undefined;
  }

  @action subscribe(service) {
    if (this.user.uid) {
      const doc = toJS(this.user);
      doc.subscriptions[service] = true;
      db.collection('users')
        .doc(this.user.uid)
        .set(doc);
    }
  }

  @action unsubscribe(service) {
    if (this.user.uid) {
      const doc = toJS(this.user);
      doc.subscriptions[service] = false;
      db.collection('users')
        .doc(this.user.uid)
        .set(doc);
    }
  }

  @action signup(email, password) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const { user } = result;
        const userDoc = {
          uid: user.uid,
          email: user.email,
          subscriptions: {
            news: false,
            stocks: false,
            currency: false,
          },
        };
        return db
          .collection('users')
          .doc(user.uid)
          .set(userDoc);
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
        const errorMessage = error.message;
        this.error = errorMessage;
      });
  }

  @action login(email, password) {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      console.error(error); // eslint-disable-line no-console
      const errorMessage = error.message;
      this.error = errorMessage;
    });
  }

  @action logout() {
    auth.signOut().catch((error) => {
      console.error(error); // eslint-disable-line no-console
      const errorMessage = error.message;
      this.error = errorMessage;
    });
  }
}
