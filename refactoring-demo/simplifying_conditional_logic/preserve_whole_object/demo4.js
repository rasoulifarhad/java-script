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
}

function xxNewwithinRange(aPlan, tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = aPlan.withinRange(low, high);
    return isWithinRange;    
}

const aPlan = new HeatingPlan(100, 200);
const aRoom = {
    daysTempRange: {
        low: 75,
        high: 145,
    }
};

const tempRange = aRoom.daysTempRange;
const isWithinRange = xxNewwithinRange(aPlan, tempRange);
if(!isWithinRange) {
    alerts.push("room temperature went outside range");
}
