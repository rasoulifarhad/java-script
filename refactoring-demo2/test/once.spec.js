import once from "../app/once/once";
import { expect } from "chai";


describe("once", function() {

    it("ok", function() {
        const squeak = a => a +  " squeak!!!!";
        let result;
        result = squeak("original");
        expect(result).to.be.equal("original squeak!!!!")
        result = squeak("original");
        expect(result).to.be.equal("original squeak!!!!")
        result = squeak("original");
        expect(result).to.be.equal("original squeak!!!!")
    });

    it("once ok", function() {
        const squeak = a => {
            return a +  " squeak!!!!";
        };
        const squeakOnce = once(squeak);
        let result;
        result = squeakOnce("only once");
        expect(result).to.be.equal("only once squeak!!!!")
        result = squeakOnce("only once");
        expect(result).to.be.undefined;
        result = squeakOnce("only once");
        expect(result).to.be.undefined;
    });

});