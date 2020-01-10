import Item from "../Models/Item.js"
import _store from "../store.js"
import _shopService from "../Services/ShopService.js"
// const swal = require('sweetalert2')
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
  document.querySelector("#cartTotal").innerHTML = total.toFixed(2).toString()
}
function _drawInsufficientFunds() {
  swal.fire({
    title: 'Insufficient Funds',
    text: 'Add more money via Paypal or Venmo',
    toast: true,
    type: "error",
    icon: 'error',
    timer: 5500,
    timerProgressBar: true,
    showConfirmButton: false,
    position: "top-right",
  })
}
function _drawDeleteItem(totalAndName) {
  document.querySelector("#numberForm" + totalAndName.id).innerHTML = `
  <form onsubmit="app.shopController.deleteItem('${totalAndName.name}')">
      <input type="number" name="quantity" min="1" max="${totalAndName.inCart}" >
      <button class="btn btn-warning" type="submit">X</button>
  </form>`
}
function _drawFunds() {
  document.querySelector('#myWallet').innerHTML = "Balance Available: $" + _store.State.wallet.toString()

}
export default class ShopController {
  constructor() {
    _drawShop()
  }
  addToCart(itemInfo) {
    if (!_shopService.addToCart(itemInfo)) {
      swal.fire({
        title: 'Store does not have enough stock.',
        toast: true,
        type: "warning",
        icon: 'warning',
        timer: 5500,
        timerProgressBar: true,
        showConfirmButton: false,
        position: "top-right",
      })
    }
  }
  viewCart() {
    _drawCart()
  }
  checkout() {
    if (_shopService.checkout()) {
      _drawShop()
      swal.fire({
        title: 'Transaction Complete',
        toast: true,
        type: "success",
        icon: 'success',
        timer: 5500,
        timerProgressBar: true,
        showConfirmButton: false,
        position: "top-right",
      })
    }
    else {
      _drawInsufficientFunds()
    }
  }
  toggleDelete(totalAndName) {
    _drawDeleteItem(totalAndName)
  }
  deleteItem(name) {
    event.preventDefault();
    _shopService.deleteItem({ numOfItems: event.target.firstElementChild.value, name: name })
    _drawCart()

  }
  addFunds() {
    _shopService.addFunds()
    _drawFunds()

  }
}