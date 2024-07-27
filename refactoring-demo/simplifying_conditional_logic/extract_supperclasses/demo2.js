class Party {

    constructor(name) {
        this._name = name;
    }
}
class Employee extends Party {

    constructor(name, id, monthlyCost) {
        super(name);
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
    
    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get monthlyCost() {
        return this._monthlyCost;
    }

    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Department extends Party {

    constructor(name, staff) {
        super(name);
        this._staff = staff;
    }

    get name() {
        return this._name;
    }

    get staff() {
        return this._staff.slice();
    }

    get totalMonthlyCost() {
        return this.staff
            .map(e => e.monthlyCost)
            .reduce((sum, cost) => sum + cost);
    }

    get headCount() {
        return this.staff.length;
    }

    get totalAnnualCost() {
        return this.totalMonthlyCost * 12;
    }
}