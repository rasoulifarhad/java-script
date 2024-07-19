
const  _ =  require('lodash');
const  getModel = require('./recommendationModel').getModel;

// The function takes a spec, a simple object that contains information about 
// how the potion will be used. The logic then interrogates the specification 
// adding suggested cricket breeds to the returned result object.

const recommender =  (spec) => {

    let result = [];

    result.concat(executeModel(spec, getModel()));
    if(seasonIncludes("summer")) {
        if(countryIncludedIn(spec, ["sparta", "atlantis"])) result.push("white lightening");
    }
    if(spec.minDuration >= 150) {
        if(seasonIncludes("summer")) {
            if(spec.minDuration < 350) result.push("white lightening");
            else if(spec.minDuration < 570) result.push("little master");
            else result.push("wall");
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
// Here you can see the general form of an adaptive model. We have a data structure 
// that contains the particular logic that we need (recommendationModel.es6) together 
// with an engine (executeModel that takes that data structure and executes it.
//
// That obvious simplification is nice, but the conditions are still JavaScript code, 
// which won't fit our needs for running in a non JavaScript environment. I'll need to 
// replace the condition code with data I can interpret.
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
    throw new Error("unable to handle " + rule.condition);
}

module.exports = {recommender, executeModel}