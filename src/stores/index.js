import UserStore from './UserStore';
import NewsStore from './NewsStore';
import SubscriptionStore from './SubscriptionsStore';
import StocksStore from './StocksStore';
import CurrencyStore from './CurrencyStore';

export const userStore = new UserStore();
export const stocksStore = new StocksStore();
export const newsStore = new NewsStore();
export const subscriptionStore = new SubscriptionStore();
export const currencyStore = new CurrencyStore();
