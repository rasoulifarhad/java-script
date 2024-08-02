export default class OrderReceipt {

    constructor(o) {
        this._o = o;
    }

    printReceipt() {
        
        let output = "";

        // headers
        output += "======Printing Orders======\n";

        output += "Date - " + this._o.date;
        output += this._o.customerName();
        output += this._o.customerAddress();

        // lineItems

        let totalSalesTx = 0.0;
        let tot = 0.0;

        this._o.lineItems().forEach((lineItem) => {
            output += lineItem.description();
            output += '\t' ;
            output += lineItem.price();
            output += '\t' ;
            output += lineItem.quantity();
            output += '\t' ;
            output += lineItem.totalAmount();
            output += '\n' ;

            // calculate sales tax, rate: 10%
            let salesTax = lineItem.totalAmount() * 0.10;
            totalSalesTx  += salesTax;

            // calculate total amount of linr item =price * quantity + 10 % sales tax
            tot += lineItem.totalAmount() + salesTax;
        });
        
        // print tax
        output += "Sales Tax" + '\t' + totalSalesTx;

        // total amount
        output += "Total Amount" + '\t' + tot;
        return output.toString();
    }
}