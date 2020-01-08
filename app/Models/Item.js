export default class Item {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.description = data.description
    this.stock = data.stock
    this.soldOut = false
  }
  get template() {
    return `
  <div class="col">
        <div class="card">
            <div>
                <h3>${this.name}</h3>
                <h5>${this.price}</h5>

            </div>
        </div>
    </div> 
  `
  }
}