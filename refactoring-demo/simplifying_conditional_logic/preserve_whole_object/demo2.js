
class HeatingPlan {

    constructor(bottom, top) {
        this.temperaturePlan = {
            low: bottom,
            high: top,
        }
    }

    withinRange(aNumberRange) {
        return (aNumberRange.low >= this.temperaturePlan.low) && (aNumberRange.high <= this.temperaturePlan.high)
    }
}



if(!aPlan.withinRange(aRoom.daysTempRange)) {
    alerts.push("room temperature went outside range");
}
