import { expect } from "chai";
import Position from "../app/rover/position";
import Rover from "../app/rover/rover";

describe("Rover", function() {


    it("navigate", function() {
        const rover = new Rover(1, 1, "N");

        const actualPosition = rover.navigate("RMLM");

        expect(actualPosition).to.deep.equal(new Position(2, 2, "N"));
    });
});