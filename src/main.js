import { getItem, setItem } from './utils/localStorage.js';
import { userCoinStoreInit } from './store/UserCoinStore.js';

import { productStoreInit } from './store/VendingProductStore.js';
import { vendingCoinStoreInit } from './store/VendingCoinStore.js';
import { userPurchasedItemInit } from './store/UserPurchasedItem.js';

import userInitData from './data/userInitData.js';

import InsertCoin from './components/User/InsertCoin.js';
import MyCoin from './components/User/myCoin.js';
import PurchasedItemList from './components/User/PurchasedItemList.js';

import Coins from './components/Vending/Coins.js';
import vendingMachineInitData from './data/vendingInitMachineData.js';
import Products from './components/Vending/Products.js';

(function () {
  let vendingData = getItem('vendingMachine');
  let userData = getItem('user');

  if (!userData) {
    userData = userInitData;
    setItem('user', userData);
  }

  if (!vendingData) {
    vendingData = vendingMachineInitData;
    setItem('vendingMachine', vendingData);
  }

  userCoinStoreInit({
    myMoney: userData['myMoney'],
    mySpendMoney: userData['mySpendMoney']
  });
  productStoreInit(vendingData['productItem']);
  vendingCoinStoreInit(vendingData['coin']);
  userPurchasedItemInit(userData['myPurchasedItems']);

  // user
  const insertCoin = new InsertCoin();
  const myCoin = new MyCoin();
  const purchasedItemList = new PurchasedItemList();

  // vending machine
  const coins = new Coins();
  const products = new Products();

  const sectionCoinEl = document.querySelector('.section-coin');
  const sectionProduct = document.querySelector('.section-product');
  const sectionPurchasedEl = document.querySelector('.section-purchased');

  const areaMoneyEl = document.querySelector('.area-money');
  const areaInsertEl = document.querySelector('.area-insert');

  sectionCoinEl.insertAdjacentHTML('beforeend', coins.render());
  coins.onClickChanges();

  sectionProduct.insertAdjacentHTML('beforeend', products.render());
  products.onClickPurchase();

  sectionPurchasedEl.insertAdjacentHTML(
    'beforeend',
    purchasedItemList.render()
  );

  areaMoneyEl.insertAdjacentHTML('beforeend', myCoin.render());
  areaInsertEl.insertAdjacentHTML('beforeend', insertCoin.render());
  insertCoin.onClickInsert();
})();
