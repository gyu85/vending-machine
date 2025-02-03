import {
  updateUserCoin,
  subscribeUserCoin
} from '../../store/UserCoinStore.js';

import { updateVendingCoin } from '../../store/VendingCoinStore.js';

export default class InsertCoin {
  constructor() {
    subscribeUserCoin(this.drawInsert.bind(this));
  }

  insertBtnsHandler = {
    insert(insertedCoin) {
      updateUserCoin('insert', insertedCoin);
      updateVendingCoin('insert', insertedCoin);
    },
    cancel(tfEl) {
      tfEl.value = '';
    }
  };

  onClickInsert() {
    const wrapInsertEl = document.querySelector('.box-btns');
    const tfInsertEl = document.querySelector('.tf-insert');

    wrapInsertEl.addEventListener('click', e => {
      if (e.target.tagName !== 'BUTTON') return;

      const {
        dataset: { use }
      } = e.target;

      if (!use) return;

      const tfInsertElValue = Number(tfInsertEl.value)
        ? Number(tfInsertEl.value)
        : 0;

      const insertHandler = this.insertBtnsHandler[use];

      switch (use) {
        case 'insert':
          insertHandler(tfInsertElValue);
          break;

        case 'cancel':
          insertHandler(tfInsertEl);
          break;

        default:
          return;
      }
    });
  }

  drawInsert() {
    const areaInsertEl = document.querySelector('.area-insert');
    const wrapInsertEl = document.querySelector('.wrap-insert');

    if (wrapInsertEl) {
      wrapInsertEl.remove();
    }

    areaInsertEl.insertAdjacentHTML('beforeend', this.render());
    this.onClickInsert();
  }

  render() {
    return `
      <div class="wrap-insert">
        <input
          type="text"
          class="tf-insert" />
        <div class="box-btns">
          <button
            type="button"
            class="insert"
            data-use="insert">
            투입
          </button>
          <button
            type="button"
            class="cancel"
            data-use="cancel">
            취소
          </button>
        </div>
      </div>
    `;
  }
}
