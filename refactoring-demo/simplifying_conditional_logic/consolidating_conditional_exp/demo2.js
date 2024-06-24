function disabilityAmount(anEmployee) {
    if(isNotEligableForDisability(anEmployee)) {
        return 0;
    }

    // ....
}

function isNotEligableForDisability(anEmployee) {
    return ((anEmployee.seniority < 2)
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime));
}
