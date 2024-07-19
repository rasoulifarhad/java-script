
const  _ =  require('lodash');
const  getModel = require('./recommendationModel').getModel;

const recommender =  (spec) => {

    let result = [];

    result.concat(executeModel(spec, getModel()));
    const summerPicks = [
        [150, null],
        [350, "white lightening"],
        [570, "little master"],
        [infinity, "wall"]
    ];
    const nonSummerPicks = [
        [150, null],
        [450, "white lightening"],
        [infinity, "little master"]
    ];
    if(seasonIncludes("summer")) {
        if(pickMinDuration(spec, summerPicks))
            result.push(pickMinDuration(spec, summerPicks));
    }
    else {
        if(pickMinDuration(spec, nonSummerPicks)) 
            result.push(pickMinDuration(spec, nonSummerPicks));
    }
    return _.uniq(result); 

}

function pickMinDuration(spec, range) {
    if(spec.minDuration) {
        return pickFromRange(summerPicks, spec.minDuration);
    }

}
function seasonIncludes(spec, arg) {
    return spec.seasons && spec.seasons.includes(arg);
}

function countryIncludedIn(spec, anArray) {
    return anArray.includes(spec.country);
}
const  executeModel = (spec, model) => {
    return model
        .filter((r) => isActive(r, spec))
        .map((r) => r.result);
}

function isActive(rule, spec)  {
    if(rule.condition === 'atNight') {
        return spec.atNight;
    }
    if(rule.condition === 'seasonIncludes') {
        return seasonIncludes(spec, rule.conditionArgs[0]);
    }
    if(rule.condition === 'countryIncludedIn') {
        return rule.conditionArgs.includes(spec.country);
    }
    if(rule.condition === 'and') {
        return rule.conditionArgs.every((arg) => isActive(arg, spec));
    }
    throw new Error("unable to handle " + rule.condition);
}

function pickFromRange(range, value) {
    const matchIndex = range.findIndex((r) => value < r[0]);
    return range[matchIndex][1];
}

module.exports = {recommender, executeModel}