export default class OrderReceipt {

    constructor(o) {
        this._o = o;
    }

    printReceipt() {
        let receipt = this.header();

        // lineItems

        let totalSaleTax = 0.0;
        let totalOrderAmount = 0.0;

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
            totalSaleTax  += salesTax;

            // calculate total amount of linr item =price * quantity + 10 % sales tax
            totalOrderAmount += lineItem.totalAmount() + salesTax;
        });
        
        receipt += this.footer(totalSaleTax, totalOrderAmount);
        return receipt.toString();
    }

    header() {
        return "======Printing Orders======\n" +
            this._o.customerName() +
            this._o.customerAddress();
    }

    footer(totalSaleTax, totalOrderAmount) {
        let footer = "Sales Tax" + '\t' + totalSaleTax;
        footer += "Total Amount" + '\t' + totalOrderAmount;
        return footer;
    }
}