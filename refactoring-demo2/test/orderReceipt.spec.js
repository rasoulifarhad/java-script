// import LineItem from "../app/order_receipt/lineItem";
import LineItem from "../app/order_receipt/lineItem";
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

    it("print line item", function() {

        const items = [
            new LineItem("product #1", 10.0, 2),
            new LineItem("product #2", 5.0, 5),
            new LineItem("product #3", 20.0, 1),
        ];

        const order = new Order("customer #2", "address #2", items);
        const receipt = new OrderReceipt(order);

        const output = receipt.printReceipt();

        expect(output).to.include("product #1\t10\t2\t20\n");
        expect(output).to.include("product #2\t5\t5\t25\n");
        expect(output).to.include("product #3\t20\t1\t20\n");
    });

    it("print sales tax", function() {

        const items = [
            new LineItem("product #1", 10.0, 2),
            new LineItem("product #2", 5.0, 5),
            new LineItem("product #3", 20.0, 1),
        ];

        const order = new Order("customer #2", "address #2", items);
        const receipt = new OrderReceipt(order);

        const output = receipt.printReceipt();

        expect(output).to.include("Sales Tax\t6.5\n");
    });

    it("print total amount", function() {

        const items = [
            new LineItem("product #1", 10.0, 2),
            new LineItem("product #2", 5.0, 5),
            new LineItem("product #3", 20.0, 1),
        ];

        const order = new Order("customer #2", "address #2", items);
        const receipt = new OrderReceipt(order);

        const output = receipt.printReceipt();

        expect(output).to.include("Total Amount\t71.5");
    });

});