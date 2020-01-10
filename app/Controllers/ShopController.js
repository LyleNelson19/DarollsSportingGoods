import Item from "../Models/Item.js"
import _store from "../store.js"
import _shopService from "../Services/ShopService.js"
function _drawShop() {
  let template = ""
  document.querySelector('#myWallet').innerHTML = "Balance Available: $" + _store.State.wallet.toString()
  _store.State.items.forEach(Item => template += Item.template)
  document.querySelector("#items").innerHTML = template
}

function _drawCart() {
  let template = ""
  _store.State.cart.forEach(Item => {
    template += Item.CartTemplate
  })
  document.querySelector("#myCart").innerHTML = template
  let total = 0
  _store.State.cart.forEach(item => total += (item.price * item.inCart))
  document.querySelector("#cartTotal").innerHTML = total.toString()
}

export default class ShopController {
  constructor() {
    _drawShop()
    _store.subscribe("cart", _drawCart);
    _store.subscribe("wallet", _drawCart);

  }
  addToCart(itemInfo) {
    _shopService.addToCart(itemInfo)
    // _drawCart()
  }
  viewCart() {
    // _shopService.viewCart()
    _drawCart()
  }
  checkout() {
    _shopService.checkout()
    _drawShop()
  }

}