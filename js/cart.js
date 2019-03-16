import {Item} from "./item.js";
import {ShoppingCartService} from "./shoppingCartService.js";
let cartService = new ShoppingCartService();

let item1 = new Item(1,"Book", 120, 13);
let item2 = new Item(2,"Note", 50, 7);
let item3 = new Item(3,"Bag", 400, 1);

// cartService.addItem(item1);
// cartService.addItem(item2);
// cartService.addItem(item3);
// cartService.getItems();
// console.log(cartService.getItems());
// cartService.decrementItemQuantity(1);
// cartService.incrementItemQuantity(2);
// cartService.getItems();
// cartService.decrementItemQuantity(3);
// cartService.save();
console.log(cartService.getItems());