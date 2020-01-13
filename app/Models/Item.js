export default class Item {
  constructor(data) {
    this.name = data.name
    this.price = data.price.toFixed(2)
    this.description = data.description
    this.stock = data.stock
    this.soldOut = false
    this.inCart = data.inCart
    this.img = data.img
    this.id = data.price.toFixed(0)
  }
  get template() {
    let template = `
    <div class="col-3 pt-3 mb-3">
    <div class="card h-100">
    <img src="${this.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h3>${this.name}</h3>
    <h5>$${this.price}</h5>
    <p class="pb-3">${this.description}<p>
    `
    if (this.stock <= 0) {
      template += `<sm class="stockCount mt-1" style="color: red;">Out Of Stock</sm>
       </div>
    </div>
    </div> `
    } else {
      template += ` <sm class="stockCount mt-1">In Stock: ${this.stock}<sm>
    <button class="btn btn-info mb-1" onclick="app.shopController.addToCart({name:'${this.name}', price:${this.price},img: '${this.img}'})"> Add To Cart </button>
    </div>
    </div>
    </div> 
    `
    }
    return template
  }
  get CartTemplate() {
    let total = (this.price * this.inCart)
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
                                
                                <td class="d-flex">
                                    <button onclick="app.shopController.toggleDelete({inCart:${this.inCart}, name: '${this.name}', id: '${this.id}'})" class="btn btn-danger btn-sm">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    <div id="numberForm${this.id}" class=" pl-2"></div>
                                </td>
                            </tr>
                        </tbody> 
    `
  }
}