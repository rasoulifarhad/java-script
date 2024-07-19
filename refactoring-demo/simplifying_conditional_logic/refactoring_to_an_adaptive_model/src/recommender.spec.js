const expect = require('chai').expect;
const assert = require('chai').assert;
const approvals = require('approvals');
approvals.mocha();
const executeModel =  require('./recommender.js').executeModel;

describe("test", function() {

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