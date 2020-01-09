import store from "../store.js";
import Item from "../Models/Item.js";


class ShopService {
  addToCart(itemInfo) {
    let foundItem = store.State.cart.find(item => item.name == itemInfo.name)
    let foundItemIndex = store.State.cart.findIndex(item => item.name == itemInfo.name)

    if (foundItem) {
      foundItem.inCart++
      // store.State.items[]
      store.State.cart[foundItemIndex] = foundItem
    } else {
      itemInfo.inCart = 1
      store.State.cart.push(new Item(itemInfo))
    }
  }
  viewCart() {
    let finalCart = []

    console.log(finalCart)
    console.log(store.State.cart)
  }
  checkout() {

  }
}

let service = new ShopService();
export default service;