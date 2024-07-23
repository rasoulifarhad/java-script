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

    get isPrivileged() {
        return true;
    }

    get assignCar() {
        return true;
    }
    
    finishConstruction() {
        if(this.isPrivileged) {
            this.assignCar();
        }
    }
}

class Department extends Party {

    constructor(name, staff) {
        super(name);
        this._staff = staff;
    }
}

class Manager extends Employee {

    constructor(name, grade) {
        super(name);
        this._grade = grade;
        this.finishConstruction();
    }

    get isPrivileged() {
        return this._grade > 4;
    }

}