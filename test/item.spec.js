import { expect } from "chai"
import { Item } from "../js/item.js";

describe("Item Test", () => {
  it("should get Item", () => {
    let item = new Item(1, "Book", 150, 10);
    
    expect(item.getname()).to.equal("Book");
    expect(item.getPrice()).to.equal(150);
    expect(item.getquantity()).to.equal(10);
  })

  it("should get Item's price", () => {
    let item = new Item(1, "Book", 150, 10);
    
    item.setPrice(200);
    
    expect(item.getPrice()).to.equal(200);
  })

  it("should get Item's quantity", () => {
    let item = new Item(1, "Book", 150, 10);
    
    item.setquantity(5);
    
    expect(item.getquantity()).to.equal(5);
  })

  it("should get Item's quantity increment", () => {
    let item = new Item(1, "Book", 150, 10);
    
    item.increaseQuantity();
    
    expect(item.getquantity()).to.equal(11);
  })

  it("should get Item's quantity decrement", () => {
    let item = new Item(1, "Book", 150, 10);

    item.decreaseQuantity();
    
    expect(item.getquantity()).to.equal(9);
  })

  it("should get Item JSON", () => {
    let item = new Item(1, "Book", 150, 10);
    
    let result = item.toJson();

    expect(result.id).to.equal(1);
    expect(result.name).to.equal("Book");
    expect(result.price).to.equal(150);
    expect(result.quantity).to.equal(10);
  })
})
