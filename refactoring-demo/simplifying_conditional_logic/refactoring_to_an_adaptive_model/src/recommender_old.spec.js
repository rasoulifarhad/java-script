const expect = require('chai').expect;
const assert = require('chai').assert;
const approvals = require('approvals');
approvals.mocha();
const executeModel =  require('./recommender_old.js').executeModel;

describe("", function() {

    it('night only old', function () {
        assert.include(recommender({atNight: true}), 'whispering death');
    });


});