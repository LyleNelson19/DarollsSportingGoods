import Item from "../Models/Item.js"
import _store from "../store.js"
import _shopService from "../Services/ShopService.js"
function _drawShop() {
  let template = ""
  _store.State.items.forEach(Item => template += Item.template)
  document.querySelector("#items").innerHTML = template
}
function _drawCart() {
  let template = ""
  _store.State.cart.forEach(item => template += item.name)
  template += "<div>Cart Total:<span id='cartTotal'></span></div>"
  document.querySelector("#cart").innerHTML = template
  let total = 0
  _store.State.cart.forEach(item => total += item.price)
  document.querySelector("#cartTotal").innerHTML = total.toString()
}

export default class ShopController {
  constructor() {
    _drawShop()
  }
  addToCart(itemInfo) {
    _shopService.addToCart(itemInfo)
    _drawCart()
  }
}