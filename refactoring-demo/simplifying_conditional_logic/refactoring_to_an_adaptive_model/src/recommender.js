
const  _ =  require('lodash');
const  getModel = require('./recommendationModel').getModel;

const recommender =  (spec) => {

    let result = [];

    result.concat(executeModel(spec, getModel()));
    return _.uniq(result); 

}

function pickMinDuration(spec, range) {
    if(spec.minDuration) {
        return pickFromRange(range, spec.minDuration);
    } else {
        return [];
    }

}
function seasonIncludes(spec, arg) {
    return spec.seasons && spec.seasons.includes(arg);
}

function countryIncludedIn(spec, anArray) {
    return anArray.includes(spec.country);
}
const  executeModel = (spec, model) => {
    return _.chain(model)
        .filter((r) => isActive(r, spec))
        .map((r) => result(r, spec))
        .flatten()
        .value();
}

function result(r, spec) {
    if(r.result === "value") {
        return r.resultArgs[0]
    } else if(r.resultFunction === 'pickMinDuration') {
        return pickMinDuration(spec, r.resultArgs[0]);
    }
    throw new Error("unknown result function: " + r.result);

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
    if(rule.condition === 'pickMinDuration') {
        return true;
    }
    if(rule.condition === 'not') {
        return !isActive(rule.conditionArgs[0], spec);
    }
    throw new Error("unable to handle " + rule.condition);
}

function pickFromRange(range, value) {
    const matchIndex = range.findIndex((r) => value < r[0]);
    return range[matchIndex][1];
}

module.exports = {recommender, executeModel}