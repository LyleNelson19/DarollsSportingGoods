import store from "../store.js";


class ShopService {
  addToCart(itemInfo) {
    debugger
    store.State.cart.push(itemInfo)

  }
}

let service = new ShopService();
export default service;