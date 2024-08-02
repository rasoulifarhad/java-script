export default class OrderReceipt {

    constructor(o) {
        this._o = o;
    }

    printReceipt() {
        let receipt = this.header();

        // lineItems

        let totalSalesTx = 0.0;
        let tot = 0.0;

        this._o.lineItems().forEach((lineItem) => {
            receipt += lineItem.description();
            receipt += '\t' ;
            receipt += lineItem.price();
            receipt += '\t' ;
            receipt += lineItem.quantity();
            receipt += '\t' ;
            receipt += lineItem.totalAmount();
            receipt += '\n' ;

            // calculate sales tax, rate: 10%
            let salesTax = lineItem.totalAmount() * 0.10;
            totalSalesTx  += salesTax;

            // calculate total amount of linr item =price * quantity + 10 % sales tax
            tot += lineItem.totalAmount() + salesTax;
        });
        
        // print tax
        receipt += "Sales Tax" + '\t' + totalSalesTx;

        // total amount
        receipt += "Total Amount" + '\t' + tot;
        return receipt.toString();
    }

    header() {
        return "======Printing Orders======\n" +
            this._o.customerName() +
            this._o.customerAddress();
    }
}