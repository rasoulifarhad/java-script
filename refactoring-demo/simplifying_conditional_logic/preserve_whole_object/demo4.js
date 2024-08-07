class HeatingPlan {

    constructor(bottom, top) {
        this.temperaturePlan = {
            low: bottom,
            high: top,
        }
    }

    withinRange(tempRange) {
        return (tempRange.low >= this.temperaturePlan.low) && (tempRange.high <= this.temperaturePlan.high)
        return this.withinRange(tempRange.low, tempRange.high);    
    }
    
}

const aPlan = new HeatingPlan(100, 200);
const aRoom = {
    daysTempRange: {
        low: 75,
        high: 145,
    }
};

const tempRange = aRoom.daysTempRange;
if(!aPlan.withinRange(tempRange)) {
    alerts.push("room temperature went outside range");
}
