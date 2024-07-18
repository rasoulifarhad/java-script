import { assert } from "chai";
import { executeModel } from "./recommender";

describe("", function() {

    it('night only', function () {
        assert.include(
            executeModel({atNight: true}, [{"condition": "atNight", "result": "expected"}]),
            'expected'
        );
    });

    it('country', function () {
        const model = [{condition: 'countryIncludedIn', conditionArgs: ["sparta", "atlantis"], result: 'expected'}];
        expect(executeModel({country: "sparta"}, model)).include("expected");
        expect(executeModel({country: "atlantis"}, model)).include("expected");
    });

});