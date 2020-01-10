import store from "../store.js";
import Item from "../Models/Item.js";


class ShopService {
  addToCart(itemInfo) {
    let foundItem = store.State.cart.find(item => item.name == itemInfo.name)
    let foundItemIndex = store.State.cart.findIndex(item => item.name == itemInfo.name)
    if (foundItem) {
      foundItem.inCart++
      store.State.cart[foundItemIndex] = foundItem
    } else {
      itemInfo.inCart = 1
      store.State.cart.push(new Item(itemInfo))
    }
  }
  checkout() {
    let totalCost = 0
    let stock = store.State.items
    store.State.cart.forEach(item => totalCost += (item.inCart * item.price))
    if (store.State.wallet >= totalCost) {
      store.State.cart.forEach(item => stock.find(originalItem => originalItem.name == item.name ? originalItem.stock = (originalItem.stock - item.inCart) : ""))
      store.State.wallet -= totalCost
      store.State.cart = []
      return true
    }
    else {
      return false
    }
  }
  deleteItem(payload) {
    let foundItem = store.State.cart.find(item => item.name == payload.name)
    let foundItemIndex = store.State.cart.findIndex(item => item.name == payload.name)
    foundItem.inCart -= payload.numOfItems
    if (foundItem.inCart == 0) {
      store.State.cart.splice(foundItemIndex, 1)
    }
  }
}

let service = new ShopService();
export default service;