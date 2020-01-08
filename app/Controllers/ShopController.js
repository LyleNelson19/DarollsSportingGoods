import Item from "../Models/Item.js"
import _store from "../store.js"
function _drawShop() {
  let template = ""
  debugger
  _store.State.items.forEach(Item => template += Item.template)
  document.querySelector("#items").innerHTML = template
}

export default class ShopController {
  constructor() {
    _drawShop()
  }
}