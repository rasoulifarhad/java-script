const  _ =  require('lodash');
import model from './recommendationModel.js'

// The function takes a spec, a simple object that contains information about 
// how the potion will be used. The logic then interrogates the specification 
// adding suggested cricket breeds to the returned result object.

export default function(spec) {

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

function executeModel(spec) {
    let result = [];
    model
        .filter((r) => r.condition(spec))
        .forEach((r) => r.action(result));
    return result;
}