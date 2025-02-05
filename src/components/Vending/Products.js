import {
  getProductList,
  subscribeProducts,
  renderProductList
} from '../../store/VendingProductStore.js';

import {
  updateVendingCoin,
  getVendingCoin
} from '../../store/VendingCoinStore.js';

import { updatePurchasedList } from '../../store/UserPurchasedItem.js';

export default class Products {
  constructor() {
    this.productData = getProductList();
    this.currentCoin = getVendingCoin();

    subscribeProducts(this.drawProducts.bind(this));
  }

  onClickPurchase() {
    let productsEl = document.querySelector('.products');
    let productListCopy = structuredClone(this.productData);

    productsEl.addEventListener('click', e => {
      if (e.target.tagName !== 'BUTTON') return;

      const { dataset } = e.target;

      const purchasedItem = productListCopy.find(
        item => item.id === dataset.product
      );

      updateVendingCoin('purchase', purchasedItem.price);

      updatePurchasedList({
        productName: purchasedItem.productName,
        id: purchasedItem.id,
        quantity: 1,
        price: purchasedItem.price
      });

      renderProductList();
    });
  }

  drawProducts() {
    const sectionProduct = document.querySelector('.section-product');
    const targetElement = document.querySelector('.products');

    this.productData = getProductList();
    this.currentCoin = getVendingCoin();

    if (targetElement) {
      targetElement.remove();
    }

    sectionProduct.insertAdjacentHTML('beforeend', this.render());

    this.onClickPurchase();
  }

  render() {
    if (!this.productData || !this.productData.length) return;

    return (
      this.productData.reduce((html, item) => {
        const { productName, id, available, price, quantity } = item;

        html += `
        <li>
          <div class="box-item ${id}"></div>
          <strong class="item-name">${productName}</strong>
          <dl class="info-item">
              <dt>재고:</dt>
              <dd>${quantity}개</dd>
          </dl>
          <button
            type="button"
            data-product="${id}"
            class="purchase" ${!available ? 'disabled' : ''}
            ${quantity === 0 || price > this.currentCoin ? 'disabled' : ''}
          >
            ${price}원 구입
          </button>
        </li>
      `;

        return html;
      }, '<ul class="products">') + '</ul>'
    );
  }
}
