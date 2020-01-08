export default class Item {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.description = data.description
    this.soldOut = false
  }

}