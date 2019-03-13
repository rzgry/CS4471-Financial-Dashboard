import UserStore from './UserStore';
import NewsStore from './NewsStore';
import SubscriptionStore from './SubscriptionsStore';
import StocksStore from './StocksStore';

export const userStore = new UserStore();
export const stocksStore = new StocksStore();
export const newsStore = new NewsStore();
export const subscriptionStore = new SubscriptionStore();
