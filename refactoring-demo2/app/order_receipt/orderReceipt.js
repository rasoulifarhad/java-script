export default class OrderReceipt {

    constructor(o) {
        this._o = o;
    }

    printReceipt() {
        let receipt = this.header();
        receipt += this.printLinItems();
        receipt += this.footer();
        return receipt.toString();
    }

    header() {
        return "======Printing Orders======\n" +
            this._o.customerName() +
            this._o.customerAddress();
    }

    footer() {
        let totalSaleTax = 0.0;
        let totalAmount = 0.0;
        this._o.lineItems().forEach((lineItem) => {
            totalSaleTax  += lineItem.tax();
            totalAmount += lineItem.lineAmountWithTax();
        });
        return  "Sales Tax" + "\t" + totalSaleTax + "\n" + 
                "Total Amount" + "\t" + totalAmount + "\n";
    }

    printLinItems() {
        let lineItemsReceipt = "";
        this._o.lineItems().forEach((lineItem) => {
            lineItemsReceipt += lineItem.receiptLine();
        });
        return lineItemsReceipt;
    }
    
}