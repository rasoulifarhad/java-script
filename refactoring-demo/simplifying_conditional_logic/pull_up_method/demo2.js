class Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }

    get monthlyCost() {
        throw new SubclassResponsibilityError();
    }
}
class Employee extends Party {

}

class Department extends Party {

}