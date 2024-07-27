class Employee {

    constructor(name, id, monthlyCost) {
        this._name = name;
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

class Department {

    constructor(name, staff) {
        this._name = name;
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