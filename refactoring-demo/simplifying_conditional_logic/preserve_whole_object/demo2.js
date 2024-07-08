
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

    }
}



const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if(!aPlan.withinRange(low, high)) {
    alerts.push("room temperature went outside range");
}
