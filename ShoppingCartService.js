class ShoppingCartService {
    constructor() {
        this.items = [];
        this.persister = new CartPersister();
    }
    addItem = (item) => this.items.push(item);
    removeItem = (item) => this.items = this.items.filter(i => i != item);
    getItems = () => this.items.map(i => i.toJson());
    incrementItemQuantity = (id) => {
        let item = this.items.find(item => item.id == id);
        if (item)
            item.increaseQuantity();
    }
    decrementItemQuantity = (id) => {
        let item = this.items.find(item => item.id == id);
        if (item) {
            if (item.getquantity() > 1)
                item.decreaseQuantity();
            else
                this.removeItem(item);
        }
    }
    save = () => {
        let items = this.getItems();
        this.persister.write(items);
    }
    order = () => new Error('Not Implemented exception!');
}