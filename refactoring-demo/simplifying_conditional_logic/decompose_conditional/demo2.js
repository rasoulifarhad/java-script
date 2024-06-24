
var aDate = new Date();
function calcCharge(aDate) {simplifying_conditional_logic/demo.js

    if(!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
        charge = quantity * plan.summerRate;
    } else {
        charge = quantity * plan.regularRate + plan.regularServiceCharge;
    }
}

function summer() {
    return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}