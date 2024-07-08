
class HeatingPlan {

    constructor(bottom, top) {
        this.temperaturePlan = {
            low: bottom,
            high: top,
        }
    }

    blabla_withinRange(aNumberRange) {
        return (aNumberRange.low >= this.temperaturePlan.low) && (aNumberRange.high <= this.temperaturePlan.high)
    }
}



if(!aPlan.blabla_withinRange(aRoom.daysTempRange)) {
    alerts.push("room temperature went outside range");
}
