import {
  getVendingCoin,
  updateVendingCoin,
  subscribeCoin
} from '../../store/VendingCoinStore.js';

import { updateUserCoin } from '../../store/UserCoinStore.js';

import { renderProductList } from '../../store/VendingProductStore.js';

export default class Coins {
  constructor() {
    this.coin = getVendingCoin();
    subscribeCoin(this.drawCoin.bind(this));
  }

  drawCoin() {
    const sectionCoinEl = document.querySelector('.section-coin');
    const targetElement = document.querySelector('.area-coins');

    this.coin = getVendingCoin();

    if (targetElement) {
      targetElement.remove();
    }

    sectionCoinEl.insertAdjacentHTML('beforeend', this.render());
    this.onClickChanges();
  }

  onClickChanges() {
    const changesElement = document.querySelector('.changes');

    changesElement.addEventListener('click', () => {
      updateUserCoin('return', this.coin);
      updateVendingCoin('return');
      renderProductList();
    });
  }

  render() {
    return ` <div class="area-coins">
                <dl class="df-coin">
                  <dt>현재 금액</dt>
                  <dd>${this.coin}원</dd>
                </dl>
                <button type="button" class="changes">${this.coin}원 반환</button>
              </div>`;
  }
}
