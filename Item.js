class Item {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getname = () => this.name;
    getPrice = () => this.price;
    getquantity = () => this.quantity;

    toJson = () => {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            quantity: this.quantity
        }
    }
    setPrice = (price) => this.price = price;
    setquantity = (quantity) => this.quantity = quantity;
    increaseQuantity = () => this.quantity++;
    decreaseQuantity = () => this.quantity--;
}