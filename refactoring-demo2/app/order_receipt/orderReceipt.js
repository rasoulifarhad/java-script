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
        return  "Sales Tax" + "\t" + this._order.totalSaleTax() + "\n" + 
                "Total Amount" + "\t" + this._order.totalAmount() + "\n";
    }

    printLinItems() {
        let lineItemsReceipt = "";
        this._order.lineItems().forEach((lineItem) => {
            lineItemsReceipt += lineItem.description() + "\t" +
                                lineItem.price() + "\t" + 
                                lineItem.quantity() + "\t" +
                                lineItem.lineAmount() + "\n";
        });
        return lineItemsReceipt;
    }
    
}