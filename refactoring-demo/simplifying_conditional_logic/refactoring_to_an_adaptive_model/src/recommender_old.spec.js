import { assert } from "chai";
import recommender from "./recommender_old";

describe("", function() {

    it('night only', function () {
        assert.include(recommender({atNight: true}), 'whispering death');
    });


});