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
            receipt += this.lineItemReceipt(lineItem);
            totalSaleTax  += this.saleTax(lineItem);
            totalAmount += this.totalLineAmount(lineItem);
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
    
    saleTax(lineItem) {
        return lineItem.saleTax();
    }

    totalLineAmount(lineItem) {
        return lineItem.totalLineAmount();
    }

    lineItemReceipt(lineItem) {
        return lineItem.lineItemReceipt();
    }
}