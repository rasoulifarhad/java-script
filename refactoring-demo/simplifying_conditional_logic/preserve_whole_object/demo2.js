
class HeatingPlan {

    constructor(bottom, top) {
        this.temperaturePlan = {
            low: bottom,
            high: top,
        }
    }

    withinRange(bottom, top) {
        return (bottom >= this.temperaturePlan.low) && (top <= this.temperaturePlan.high)
    }

    blabla_withinRange(aNumberRange) {
        return this.withinRange(aNumberRange.low, aNumberRange.high);
    }
}



const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if(!aPlan.blabla_withinRange(aRoom.daysTempRange)) {
    alerts.push("room temperature went outside range");
}
