export default class LineItem {

    constructor(description, price, quantity) {
        this._description = description;
        this._price = price;
        this._quantity = quantity;
    }

    description() {
        return this._description;
    }

    price() {
        return this._price;
    }

    quantity() {
        return this._quantity;
    }

    lineAmount() {
        return this._price * this._quantity;
    }

    tax() {
        const TAX_RATE_OF_10_PERCENT = 0.10;
        return this.lineAmount() * TAX_RATE_OF_10_PERCENT;
    }

    totalAmount() {
        return this.lineAmount() + this.tax();
    }

    receipt() {
        return  this.description() + "\t" +
                this.price() + "\t" + 
                this.quantity() + "\t" +
                this.lineAmount() + "\n";
    }


}