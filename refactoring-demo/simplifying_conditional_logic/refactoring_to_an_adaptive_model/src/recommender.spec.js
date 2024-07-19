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
    it('seasons', function () {
        const model = [{"condition": "seasonIncludes", "conditionArgs": ["summer"], "result": "expected"}];
        expect(executeModel({seasons: "summer"}, model)).include("expected");
    });

    it('country', function () {
        const model = [{"condition": "countryIncludedIn", "conditionArgs": ["sparta", "atlantis"], "result": "expected"}];
        expect(executeModel({country: "sparta"}, model)).include("expected");
        expect(executeModel({country: "atlantis"}, model)).include("expected");
    });

    it('conjunction', function () {
        const model = [
            {
                "condition": "and", 
                "conditionArgs": [
                    {"condition": "seasonIncludes", "conditionArgs": ["summer"]},
                    {"condition": "countryIncludedIn", "conditionArgs": ["sparta", "atlantis"]}
                ],
                "result": "expected"
            }
        
        ];
        expect(executeModel({country: "sparta", seasons: "summer"}, model)).include("expected");
        expect(executeModel({country: "atlantis", seasons: "summer"}, model)).include("expected");
    });
});