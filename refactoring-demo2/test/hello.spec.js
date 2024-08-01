import hello from "../app/hello/hello";
import { expect } from "chai";

describe("Hello", function() {

    it("hello to world", function() {
        const actual = hello();
        expect(actual).to.equal("Hello, World")
    });
});