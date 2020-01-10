import Item from "./Models/Item.js";

let _state = {
  /**@type {Item[]} */
  items: [new Item({ name: "Daroll Desk Buddy", price: 28, description: "A Nice Hat", stock: 10, img: "https://i.etsystatic.com/21199733/r/il/7ec9eb/2100784494/il_1588xN.2100784494_8m4z.jpg" }), new Item({ name: "Supreme Sticker", price: 5, description: "Supreme Bogo sticker signed by Tim", stock: 100, img: "https://cdn.shopify.com/s/files/1/0866/4890/products/supreme-sticker_1024x1024.jpg?v=1555296012" }), new Item({ name: "Codeworks Sherpa Blanket", price: 75, description: "Very nice and warm blanky", stock: 15, img: "https://i.etsystatic.com/21199733/r/il/97d3b9/2113442965/il_1588xN.2113442965_5zqq.jpg" }), new Item({ name: "Codeworks Shirt", price: 21.99, description: "Very fuzzy shirt very soft and warm", stock: 100, img: "https://i.etsystatic.com/21199733/r/il/65c4cf/2113463293/il_1588xN.2113463293_r2sa.jpg" })],
  wallet: 200,
  /**@type {Item[]} */
  cart: []
};

/** Collection of listeners to be called based on keyed state changes
 * @type {{[x:string]: function[]}}
 */
// let _listeners = {
//   wallet: [],
//   cart: [],
//   items: []
// };

// //NOTE You should not need to change the code from this point down

// /**
//  * Validates the property string is defined in both the state and the listeners
//  * @param {string} prop
//  */
// function _validateProp(prop) {
//   if (!_state[prop] || !_listeners[prop]) {
//     throw new Error(`Unable to subscribe to ${prop}`);
//   }
// }

// /**
//  * Validates the subscriber is a function
//  * @param {function} fn
//  * @param {string} prop
//  */
// function _validateSubscriber(fn, prop) {
//   if (typeof fn != "function") {
//     throw new Error(`Unable to subscribe to ${prop} fn must be a function`);
//   }
// }

class Store {
  //   /**
  //    * Provides access to application state data
  //    */
  get State() {
    return _state;
  }
  //   /**
  //    * Takes in a property to observe, and a function to run when it changes
  //    * @param {string} prop
  //    * @param {function} fn
  //    */
  //   subscribe(prop, fn) {
  //     _validateProp(prop);
  //     _validateSubscriber(fn, prop);
  //     _listeners[prop].push(fn);
  //   }

  //   /**
  //    * Takes in a property to set, and the value to set it to
  //    * @param {string} prop
  //    * @param {any} data
  //    */
  //   commit(prop, data) {
  //     _validateProp(prop);
  //     _state[prop] = data;
  //     _listeners[prop].forEach(fn => fn());
  //   }
}

const store = new Store();
export default store;
