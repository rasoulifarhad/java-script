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

    xxNewwithinRange(tempRange) {
        return aPlan.withinRange(tempRange.low, tempRange.high);    
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
if(!aPlan.xxNewwithinRange(tempRange)) {
    alerts.push("room temperature went outside range");
}
