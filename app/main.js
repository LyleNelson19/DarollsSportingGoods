import ShopController from "./Controllers/ShopController.js"
class App {
  shopController = new ShopController()
}

window["app"] = new App();
