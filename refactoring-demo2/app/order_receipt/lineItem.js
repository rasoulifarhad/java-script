export default class LineItem {

    constructor(description, price, quantity) {
        this._description = description;
        this._price = price;
        this._quantity = quantity;
    }

    lineAmount() {
        return this._price * this._quantity;
    }

    tax() {
        const TAX_RATE_OF_10_PERCENT = 0.10;
        return this.lineAmount() * TAX_RATE_OF_10_PERCENT;
    }

    lineAmountWithTax() {
        return this.lineAmount() + this.tax();
    }

    receiptLine() {
        return  this._description + "\t" +
                this._price + "\t" + 
                this._quantity + "\t" +
                this.lineAmount() + "\n";
    }


}