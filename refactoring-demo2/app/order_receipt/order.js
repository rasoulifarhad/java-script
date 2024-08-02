export default class Order {

    constructor(customerName, customerAddress, lineItems) {
        this._customerName = customerName;
        this._customerAddress = customerAddress;
        this._lineItems = lineItems;
    }

    customerName() {
        return this._customerName;
    }

    customerAddress() {
        return this._customerAddress;
    }

    lineItems() {
        return this._lineItems;
    }

    totalAmount() {
        let totalAmount = 0.0;
        this._lineItems.forEach((lineItem) => {
          totalAmount += lineItem.lineAmountWithTax();
        });
        return  totalAmount;
    }

    totalSaleTax() {
        let totalSaleTax = 0.0;
        this._lineItems.forEach((lineItem) => {
            totalSaleTax  += lineItem.tax();
        });
        return totalSaleTax;
    }

}