import { expect } from "chai";
import Direction from "../app/direction/direction";

describe("Direction", function() {

    it("east when turn right from north", function() {
        const east = new Direction("E");
        const north = new Direction("N");

        const actual = north.turnRight();

        expect(actual).to.deep.equal(east);
    });

    it("east when turn left from south", function() {
        const south = new Direction("S");
        const east = new Direction("E");

        const actual = south.turnLeft();

        expect(actual).to.deep.equal(east);
    });



});