class Product {
    id; name; price; number;
    constructor(id, name, price, number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.number = number;
    }
    getAmount(){
        return this.number * this.price;
    }
}
