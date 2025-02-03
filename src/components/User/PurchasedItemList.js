import {
  getPurchasedItem,
  subscribePurchasedItem
} from '../../store/UserPurchasedItem.js';

import { updateUserSpendMoney } from '../../store/UserCoinStore.js';

export default class PurchasedItemList {
  constructor() {
    this.purchasedItemList = getPurchasedItem();

    subscribePurchasedItem(this.drawPurchasedItems.bind(this));
  }

  drawPurchasedItems() {
    const sectionPurchasedEl = document.querySelector('.section-purchased');
    const purchasedEl = document.querySelector('.purchased');

    this.purchasedItemList = getPurchasedItem();

    if (purchasedEl) {
      purchasedEl.remove();
    }

    updateUserSpendMoney(this.purchasedItemList);
    sectionPurchasedEl.insertAdjacentHTML('beforeend', this.render());
  }

  render() {
    return (
      this.purchasedItemList.reduce((html, item) => {
        const { id, productName, quantity } = item;
        html += `
          <li>
            <div class="box-item ${id}"></div>
            <div class="box-detail">
              <strong>${productName}</strong>
              <dl class="list-detail">
                <dt>구입수량: </dt>
                <dd>${quantity}개</dd>
              </dl>
            </div>
          </li>
        `;

        return html;
      }, '<ul class="purchased">') + '</ul>'
    );
  }
}
