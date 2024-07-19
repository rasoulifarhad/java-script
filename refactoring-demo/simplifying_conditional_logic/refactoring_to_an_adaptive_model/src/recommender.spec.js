const expect = require('chai').expect;
const assert = require('chai').assert;
const approvals = require('approvals');
approvals.mocha();
const executeModel =  require('./recommender.js').executeModel;

describe("test", function() {

    it('night only', function () {
        assert.include(
            executeModel({atNight: true}, [{"condition": "atNight", "result": "value", "resultArgs": ["expected"]}]),
            'expected'
        );
    });
    it('seasons', function () {
        const model = [{"condition": "seasonIncludes", "conditionArgs": ["summer"], "result": "value", "resultArgs": ["expected"]}];
        expect(executeModel({seasons: "summer"}, model)).include("expected");
    });

    it('country', function () {
        const model = [{"condition": "countryIncludedIn", "conditionArgs": ["sparta", "atlantis"], "result": "value", "resultArgs": ["expected"]}];
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
                "result": "value", 
                "resultArgs": ["expected"]
            }
        
        ];
        expect(executeModel({country: "sparta", seasons: "summer"}, model)).include("expected");
        expect(executeModel({country: "atlantis", seasons: "summer"}, model)).include("expected");
    });


});


describe('min duration rule', function () {
    const range = [
        [5, []],
        [10, 'low'],
        [Infinity, 'high' ],
    ];
    const model = [
        {
            condition: 'pickMinDuration', 
            conditionArgs: [range], 
            resultFunction: 'pickMinDuration',
            resultArgs: [range]
        }];
    const testValues = [
        [4.9, []],
        [5, ['low']],
        [9.9, ['low']],
        [10, ['high']]
    ];

    testValues.forEach(function (v) {
        it(`pick for duration: ${v[0]}`, function () {
                expect(executeModel({minDuration: v[0]}, model)).deep.equal(v[1]);
            }
        )
    });
    it('empty spec', function () {
        expect(executeModel({}, model)).be.empty;
    });
});
