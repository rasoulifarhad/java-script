export default class LineItem {

    constructor(desc, p, qty) {
        this._desc = desc;
        this._p = p;
        this._qty = qty;
    }

    description() {
        return this._desc;
    }

    price() {
        return this._p;
    }

    quantity() {
        return this._qty;
    }

    lineAmount() {
        return this._p * this._qty;
    }

    tax() {
        return this.lineAmount() * 0.10;
    }

    totalAmount() {
        return this.lineAmount() + this.tax();
    }

    receipt() {
        let receiptLine = this.description();
        receiptLine += "\t" ;
        receiptLine += this.price();
        receiptLine += "\t" ;
        receiptLine += this.quantity();
        receiptLine += "\t" ;
        receiptLine += this.lineAmount();
        receiptLine += "\n" ;
        return receiptLine;
    }


}