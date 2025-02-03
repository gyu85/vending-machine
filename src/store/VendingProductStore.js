import Store from '../utils/Store.js';
import { setPartItem } from '../utils/localStorage.js';

console.log('productStore init');
const vendingProductStore = new Store();

export const productStoreInit = data => {
  vendingProductStore.init(data);
};

export const getProductList = () => vendingProductStore.getData();

export const updateProductList = productId => {
  const currentProductList = structuredClone(getProductList());

  currentProductList.forEach(item => {
    if (item.id === productId) {
      item.quantity--;
    }
  });

  vendingProductStore.setData(currentProductList);
  setPartItem('vendingMachine', 'productItem', currentProductList);
  vendingProductStore.notify();
};

export const subscribeProducts = fn => {
  vendingProductStore.subscribe(fn);
};
