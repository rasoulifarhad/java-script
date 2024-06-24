function disabilityAmount(anEmployee) {
    if(isNotEligableForDisability(anEmployee)) {
        return 0;
    }

    if((anEmployee.onVacation) 
        && (anEmployee.seniority > 10)) {
            return 1;
    }
     return 0.5;

    // ....
}

function isNotEligableForDisability(anEmployee) {
    return ((anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime));
}
