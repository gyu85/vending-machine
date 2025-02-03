import { getUserCoin, subscribeUserCoin } from '../../store/UserCoinStore.js';

export default class MyCoin {
  constructor() {
    this.myMoney = getUserCoin();

    subscribeUserCoin(this.drawCoin.bind(this));
  }

  drawCoin() {
    const areaCoinEl = document.querySelector('.area-money');
    const listMoneyEl = document.querySelector('.list-money');

    if (listMoneyEl) {
      listMoneyEl.remove();
    }

    this.myMoney = getUserCoin();

    areaCoinEl.insertAdjacentHTML('beforeend', this.render());
  }

  render() {
    return `
      <dl class="list-money">
        <div class="group-money">
          <dt>My Money:</dt>
          <dd>${this.myMoney.myMoney}원</dd>
        </div>
        <div class="group-money">
          <dt>누적 사용 금액:</dt>
          <dd>${this.myMoney.mySpendMoney}원</dd>
        </div>
      </dl>
    `;
  }
}
