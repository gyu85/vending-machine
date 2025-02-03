## packages
yarn v1.22.22
node v20.18.1
npm v10.8.2

## 실행 방법
yarn dev

## 요구사항
1. **음료 목록 관리**
   - [X] 각 음료는 이름, 가격, 재고 정보를 가진다.

2. **결제 금액 투입**
   - [X] 사용자가 투입하는 금액을 관리한다.
   - [X] 투입된 금액은 누적되어 저장
   - [X] 현재 투입 금액을 확인

3. **음료 구매 로직**
   - [ ] 구매하려는 음료의 가격이 현재 투입 금액 이하인지 확인한다.
   - [X] 해당 음료의 재고가 1개 이상 남아있는지 확인한다.
   - [X] 두 조건을 모두 만족하면:
     - [X] 투입 금액에서 음료 가격만큼 차감한다.
     - [X] 음료 재고를 1개 감소시킨다.
   - [ ] 조건 불충족 시: 잔액 부족 또는 재고 부족 등의 에러/예외 처리 수행.

4. **거스름돈 반환**
   - [X] 사용자가 남은 투입 금액을 반환받을 수 있는 기능이 있다.
   - [X] 거스름돈 반환 시, 투입 금액을 0으로 초기화한다.

5. **재고 관리**
   - [ ] 재고가 0인 음료는 구매할 수 없다.
   - [X] 재고 정보는 구매 시마다 갱신되어야 한다.

6. **추가(선택) 기능**
   - [X] 데이터 영속화: 새로고침 후에도 재고 상태나 투입 금액 등을 유지하기 위해 `localStorage` 등의 기능을 활용할 수 있다.
   - [ ] 투입 금액 단위 제한: 특정 단위(예: 500원, 1000원)만 투입 가능하도록 설정할 수 있다.