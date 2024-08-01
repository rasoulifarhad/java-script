import { expect } from "chai";
import DateParser from "../app/date_parser/dateParser";

describe("DateParser", function() {

    it("parse valid date", function() {
        const expected = new Date(Date.UTC(2018, 9 - 1, 24, 0, 0));

        const actual = new DateParser("2018-09-24Z").parse();
        
        expect(actual).to.deep.equal(expected);
    });

    it("parse valid date time", function() {
        const expected = new Date(Date.UTC(2018, 9 - 1, 24, 23, 59, 0));

        const actual = new DateParser("2018-09-24T23:59Z").parse();
        
        expect(actual).to.deep.equal(expected);

    });

    it("throws exception if year string can not be parsed", function() {

    });

    it("throws exception if year is not an integer", function() {

    });

    it("throws exception if year is less than 2000", function() {

    });

});