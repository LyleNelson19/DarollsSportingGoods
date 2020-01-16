import Item from "./Models/Item.js";

let _state = {
  /**@type {Item[]} */
  items: [new Item({ name: "Supreme Sticker", price: 5, description: "Supreme Bogo sticker signed by Tim", stock: 100, img: "https://cdn.shopify.com/s/files/1/0866/4890/products/supreme-sticker_1024x1024.jpg?v=1555296012" }), new Item({ name: "1940 Bicycle Seat", price: 75, description: "Lightly used bicycle seat. Fresh springs and leather", stock: 15, img: "https://i.etsystatic.com/9812630/r/il/3df5bd/1042044464/il_570xN.1042044464_fwdq.jpg" }), new Item({ name: "Trackers Tracks", price: 221.99, description: "Similar to tank tracks but not.", stock: 5, img: "https://scontent.fboi1-1.fna.fbcdn.net/v/t31.0-8/26240681_1933227760040460_706223457971327196_o.jpg?_nc_cat=103&_nc_ohc=nHYPqHLlk3YAQkUAMwhDqfdT9iaiuXDWoxW2NcdILz1uKNDbxpgQcHOMQ&_nc_ht=scontent.fboi1-1.fna&oh=7a11cbe2f6618946b26e7d6814e7ff8e&oe=5E90D121" }), new Item({ name: "Pre-Built Fire Kit", price: 45.99, description: "If you don't want to build a fire, just pour some gasoline on this bad boy and it'll start right up.", stock: 58, img: "http://www.campfiredude.com/i/teepee_fire.jpg" }), new Item({ name: "1853 Civil War Enfield Rifle", price: 999, description: "Legend has it Abraham Lincoln scratched his name into the stock of this rifle", stock: 1, img: "https://www.medievalcollectibles.com/wp-content/uploads/2019/04/FD1067.png" }),
  new Item({ name: "Rock Wall Bunk Beds", price: 195.14, description: "Climb on up into bed with this rock wall. Children not included.", stock: 12, img: "https://i.pinimg.com/originals/74/c0/63/74c063328564dc1bc6c2e61c576e511c.jpg" }), new Item({ name: "Freshly Made Bed ToGo", price: 24.99, description: "Ever wish you had a bed to lay on outside? This leaf bed is the perfect fit, lay it down anywhere to take a nice snoozer under the sun, or moon.", stock: 100, img: "http://www.villageofpewaukeewi.us/wp-content/uploads/2014/10/010412-6-pile-of-leaves.jpg" }), new Item({ name: "Finger Testers", price: 19.99, description: "Need to go rock climbing to get your mind off coding? Pick up some of these bad boys and they will improve your finger dexterity for climbing and coding.", stock: 222, img: "https://www.dhresource.com/0x0/f2/albu/g7/M01/1A/29/rBVaSlpDXTaAR3NHAAcwKbdhr4I146.jpg" })],
  wallet: 200,
  /**@type {Item[]} */
  cart: []
};

/** Collection of listeners to be called based on keyed state changes
 * @type {{[x:string]: function[]}}
 */
// let _listeners = {
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
