class Store {
  constructor() {
    this.observer = new Set([]);
  }

  init(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  setData(value) {
    this.data = value;
  }

  subscribe(fn) {
    this.observer.add(fn);
  }

  unSubscribe(fn) {
    this.observer.delete(fn);
  }

  notify() {
    this.observer.forEach(observer => observer());
  }
}

export default Store;
