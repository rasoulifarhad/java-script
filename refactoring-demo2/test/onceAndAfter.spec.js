import onceAndAfter from "../app/once_and_after/onceAndAfter";
import { expect } from "chai";

describe("once and after", function() {


    it("should call the first function once, and the other after", function() {
        const squeak = a => {
            return a +  " squeak!!!!";
        };
        const creak = a => {
            return a + " creak!!";
        };
        const makeSound = onceAndAfter(squeak, creak);
        let result;

        result = makeSound("door");
        expect(result).to.be.equal("door squeak!!!!");
        result = makeSound("door");
        expect(result).to.be.equal("door creak!!");
        result = makeSound("door");
        expect(result).to.be.equal("door creak!!");
        result = makeSound("door");
        expect(result).to.be.equal("door creak!!");
    });
});