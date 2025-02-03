import Store from '../utils/Store.js';
import { setPartItem } from '../utils/localStorage.js';

console.log('vending coin init');
const vendingCoinStore = new Store();

export const vendingCoinStoreInit = data => {
  vendingCoinStore.init(data);
};

export const getVendingCoin = () => vendingCoinStore.getData();

export const updateVendingCoin = (state, coin = 0) => {
  let currentCoin = getVendingCoin();

  switch (state) {
    case 'purchase':
      currentCoin = currentCoin - coin;
      break;

    case 'insert':
      currentCoin = currentCoin + coin;
      break;

    case 'return':
      currentCoin = 0;
      break;

    default:
      break;
  }

  vendingCoinStore.setData(currentCoin);
  setPartItem('vendingMachine', 'coin', currentCoin);

  vendingCoinStore.notify();
};

export const subscribeCoin = fn => {
  vendingCoinStore.subscribe(fn);
};
