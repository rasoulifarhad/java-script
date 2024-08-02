// import LineItem from "../app/order_receipt/lineItem";
import Order from "../app/order_receipt/order";
import OrderReceipt from "../app/order_receipt/orderReceipt";
import { expect } from "chai";

describe("OrderReceipt", function() {

    it("print customer information on order", function() {
        const order = new Order("customer #1", "address #1", []);
        const receipt = new OrderReceipt(order);

        const output = receipt.printReceipt();

        expect(output).to.include("customer #1");
        expect(output).to.include("address #1");
    });

});