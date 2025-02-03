import Store from '../utils/Store.js';
import { setPartItem } from '../utils/localStorage.js';

console.log('User Coin store init');

const userCoinStore = new Store();

export const userCoinStoreInit = data => {
  userCoinStore.init(data);
};

export const getUserCoin = () => userCoinStore.getData();

export const updateUserCoin = (state, coin) => {
  const currentUserCoin = userCoinStore.getData();
  let myMoney = 0;

  switch (state) {
    case 'insert':
      myMoney = currentUserCoin.myMoney - coin;
      break;

    case 'return':
      myMoney = currentUserCoin.myMoney + coin;
      break;

    default:
      break;
  }

  userCoinStore.setData({
    myMoney: myMoney,
    mySpendMoney: currentUserCoin.mySpendMoney
  });

  setPartItem('user', 'myMoney', myMoney);

  userCoinStore.notify();
};

export const updateUserSpendMoney = purchasedItemList => {
  const currentUserCoin = userCoinStore.getData();
  let mySpendMoney = 0;

  mySpendMoney = purchasedItemList.reduce((acc, item) => {
    const { price, quantity } = item;

    acc += price * quantity;

    return acc;
  }, mySpendMoney);

  userCoinStore.setData({
    myMoney: currentUserCoin.myMoney,
    mySpendMoney: mySpendMoney
  });

  setPartItem('user', 'mySpendMoney', mySpendMoney);
  userCoinStore.notify();
};

export const subscribeUserCoin = fn => {
  userCoinStore.subscribe(fn);
};
