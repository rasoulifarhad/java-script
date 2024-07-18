import { assert } from "chai";
import recommender from "./recommender";

describe("", function() {

    it('night only', function () {
        assert.include(recommender({atNight: true}), 'whispering death');
    });


});