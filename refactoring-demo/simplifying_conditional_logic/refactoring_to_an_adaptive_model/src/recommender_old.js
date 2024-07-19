const  _ =  require('lodash');
const  getModel = require('./recommendationModel_old.js').getModel;

// The function takes a spec, a simple object that contains information about 
// how the potion will be used. The logic then interrogates the specification 
// adding suggested cricket breeds to the returned result object.

const recommender = (spec) => {

    let result = [];
    if(spec.atNight) result.push("whispering death");
    if(spec.seasons && spec.seasons.includes("winter")) result.push("beefy");
    if(spec.seasons && spec.seasons.includes("summer")) {
        if(["sparta", "atlantis"].includes(spec.country)) result.push("white lightening");
    }
    if(spec.minDuration >= 150) {
        if(spec.seasons && spec.seasons.includes("summer")) {
            if(spec.minDuration < 350) result.push("white lightening");
            else if(spec.minDuration < 570) result.push("little master");
            else result.push("wall");
        }
        else {
            if (spec.minDuration < 450) result.push("white lightening");
            else result.push("little master");
        }
    }
    return _uniq(result);

}

// Here you can see the general form of an adaptive model. We have a data structure 
// that contains the particular logic that we need (recommendationModel.es6) together 
// with an engine (executeModel that takes that data structure and executes it.
//
// That obvious simplification is nice, but the conditions are still JavaScript code, 
// which won't fit our needs for running in a non JavaScript environment. I'll need to 
// replace the condition code with data I can interpret.
const executeModel = (spec) => {
    return model
        .filter((r) => r.condition(spec))
        .map((r) => r.result);
}

module.exports = {recommender, executeModel}