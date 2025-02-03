export default class Observer {
  constructor() {
    this.observer = [];
  }

  subscribe(fn) {
    this.observer.push(fn);
  }

  unsubscribe(fn) {
    this.observer = this.observer.filter(observer => observer !== fn);
  }

  notify(data) {
    this.observer.forEach(observer => observer(data));
  }
}
