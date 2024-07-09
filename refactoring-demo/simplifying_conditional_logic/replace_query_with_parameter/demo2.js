// Mechanics
// 
// - Use Extract Variable (119) on the query code to separate it from the rest of the function body.
// - Apply Extract Function (106) to the body code that isn’t the call to the query.
//   Give the new function an easily searchable name, for later renaming.
// - Use Inline Variable (123) to get rid of the variable you just created.
// - Apply Inline Function (115) to the original function.
// - Rename the new function to that of the original.
// 

class HeatingPlan {

    constructor(min, max) {
        this._min = min;
        this._max = max;
    }
    
    get targetTemperature() {
        return this.xxxNewTargetTemperature(thermostat.selectedTemperature);
    }

    xxxNewTargetTemperature(selectedTemperature) {
        if(selectedTemperature > this._max) {
            return this._max;
        } else if(selectedTemperature < this._min) {
            return this._min;
        } else {
            return selectedTemperature;
        }

    }
}

const thePlan = {};
const thermostat = {};

if(thePlan.xxxNewTargetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature) {
    setToHeat();
} else if (thePlan.xxxNewTargetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature) {
    setToCool();
} else {
    setOff();
}
