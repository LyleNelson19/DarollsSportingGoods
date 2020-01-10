export default class Item {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.description = data.description
    this.stock = data.stock
    this.soldOut = false
    this.inCart = data.inCart
    this.img = data.img
    this.id = data.price
  }
  get template() {
    return `
    <div class="col-4">
    <div class="card">
    <img src="${this.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h3>${this.name}</h3>
    <h5>$${this.price}</h5>
    <p>${this.description}<p>
    <sm>In Stock: ${this.stock}<sm>
    <button class="btn btn-info" onclick="app.shopController.addToCart({name:'${this.name}', price:${this.price}, img: '${this.img}'})"> Add To Cart </button>
    </div>
    </div>
    </div> 
    `
  }
  get CartTemplate() {
    let total = (this.price * this.inCart)
    // debugger
    return `
<tbody class="row">
                            <tr>
                                <td class="w-25">
                                    <img src="${this.img}"
                                    class="img-fluid img-thumbnail" alt="Sheep">
                                </td>
                                <td>${this.name}</td>
                                <td>$${this.price}</td>
                                
                                <td>${this.inCart}</td>
                                <td>$${total}</td>
                                
                                <td>
                                    <button onclick="app.shopController.toggleDelete({inCart:${this.inCart}, name: '${this.name}', id: '${this.id}'})" class="btn btn-danger btn-sm">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    <div id="numberForm${this.id}"></div>
                                </td>
                            </tr>
                        </tbody> 
    `
  }
}