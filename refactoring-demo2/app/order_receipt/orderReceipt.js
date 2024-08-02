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
            receipt += lineItem.receipt();
            totalSaleTax  += lineItem.tax();
            totalAmount += lineItem.totalAmount();
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
        return lineItem.tax();
    }

    totalLineAmount(lineItem) {
        return lineItem.totalAmount();
    }

    lineItemReceipt(lineItem) {
        return lineItem.receipt();
    }
}