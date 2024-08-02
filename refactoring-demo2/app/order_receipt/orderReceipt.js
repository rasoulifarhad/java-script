export default class OrderReceipt {

    constructor(order) {
        this._order = order;
    }
 
    printReceipt() {
        return this.printHeader() +  this.printLinItems() + this.printFooter();
    }

    printHeader() {
        return "======Printing Orders======\n" +
            this._order.customerName() +
            this._order.customerAddress();
    }

    printFooter() {
        let totalSaleTax = 0.0;
        let totalAmount = 0.0;
        this._order.lineItems().forEach((lineItem) => {
            totalSaleTax  += lineItem.tax();
            totalAmount += lineItem.lineAmountWithTax();
        });
        return  "Sales Tax" + "\t" + totalSaleTax + "\n" + 
                "Total Amount" + "\t" + totalAmount + "\n";
    }

    printLinItems() {
        let lineItemsReceipt = "";
        this._order.lineItems().forEach((lineItem) => {
            lineItemsReceipt += lineItem.receiptLine();
        });
        return lineItemsReceipt;
    }
    
}