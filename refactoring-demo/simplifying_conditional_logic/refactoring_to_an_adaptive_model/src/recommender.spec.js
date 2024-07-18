import { assert } from "chai";
import { executeModel } from "./recommender";

describe("", function() {

    it('night only', function () {
        assert.include(
            executeModel({atNight: true}, [{"condition": "atNight", "result": "expected"}]),
            'expected'
        );
    });


});