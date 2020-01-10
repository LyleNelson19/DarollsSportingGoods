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
  checkout() {
    debugger
    let totalCost = 0
    let stock = store.State.items
    store.State.cart.forEach(item => totalCost += (item.inCart * item.price))
    if (store.State.wallet >= totalCost) {
      store.State.cart.forEach(item => stock.find(originalItem => originalItem.name == item.name ? originalItem.stock = (originalItem.stock - item.inCart) : ""))
      store.State.wallet -= totalCost
    }
    else {
      console.log("not enough money")
    }
  }
}

let service = new ShopService();
export default service;