
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
    if(spec.minDuration >= 150) {
        if(seasonIncludes("summer")) {
            result.push(pickFromRange(summerPicks, spec.minDuration));
        }
        else {
            if (spec.minDuration < 450) result.push("white lightening");
            else result.push("little master");
        }
    }
    return _.uniq(result); 

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