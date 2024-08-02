export default class OrderReceipt {

    constructor(o) {
        this._o = o;
    }

    printReceipt() {
        let receipt = this.header();

        // lineItems

        let totalSaleTax = 0.0;
        let totalAmount = 0.0;

        this._o.lineItems().forEach((lineItem) => {
            receipt += lineItem.description();
            receipt += "\t" ;
            receipt += lineItem.price();
            receipt += "\t" ;
            receipt += lineItem.quantity();
            receipt += "\t" ;
            receipt += lineItem.lineAmount();
            receipt += "\n" ;

            // calculate sales tax, rate: 10%
            let salesTax = lineItem.lineAmount() * 0.10;
            totalSaleTax  += salesTax;

            // calculate total amount of linr item =price * quantity + 10 % sales tax
            totalAmount += lineItem.lineAmount() + salesTax;
        });
        
        receipt += this.footer(totalSaleTax, totalAmount);
        return receipt.toString();
    }

    header() {
        return "======Printing Orders======\n" +
            this._o.customerName() +
            this._o.customerAddress();
    }

    footer(totalSaleTax, totalAmount) {
        return  "Sales Tax" + "\t" + totalSaleTax + "\n" + 
                "Total Amount" + "\t" + totalAmount + "\n";
    }
}