import Store from '../utils/Store.js';
import { setPartItem } from '../utils/localStorage.js';

console.log('user purchased item init');

const userPurchasedItemStore = new Store();

export const userPurchasedItemInit = data => {
  userPurchasedItemStore.init(data);
};

export const getPurchasedItem = () => userPurchasedItemStore.getData();

export const updatePurchasedList = purchasedItem => {
  const currentPurchasedItemList = structuredClone(getPurchasedItem());

  const itemFinded = currentPurchasedItemList.find(
    item => item.id === purchasedItem.id
  );

  if (itemFinded) {
    itemFinded.quantity = itemFinded.quantity + purchasedItem.quantity;
  }

  if (!currentPurchasedItemList.length || !itemFinded) {
    currentPurchasedItemList.push(purchasedItem);
  }

  userPurchasedItemStore.setData(currentPurchasedItemList);
  setPartItem('user', 'myPurchasedItems', currentPurchasedItemList);

  userPurchasedItemStore.notify();
};

export const subscribePurchasedItem = fn => {
  userPurchasedItemStore.subscribe(fn);
};
