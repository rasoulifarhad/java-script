
var aDate = new Date();
function calcCharge(aDate) {simplifying_conditional_logic/demo.js
    charge = summer() ? summerCharge() : regularCharge();
}

function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
    return quantity * plan.summerRate;
}

function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}