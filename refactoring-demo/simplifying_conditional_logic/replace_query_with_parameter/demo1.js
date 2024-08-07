class HeatingPlan {

    constructor(min, max) {
        this._min = min;
        this._max = max;
    }

    get targetTemperature() {
        if(thermostat.selectedTemperature > this._max) {
            return this._max;
        } else if(thermostat.selectedTemperature < this._min) {
            return this._min;
        } else {
            return thermostat.selectedTemperature;
        }
    }
}

const thePlan = {};
const thermostat = {};

if(thePlan.targetTemperature > thermostat.currentTemperature) {
    setToHeat();
} else if (thePlan.targetTemperature < thermostat.currentTemperature) {
    setToCool();
} else {
    setOff();
}