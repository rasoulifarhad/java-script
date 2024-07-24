class Employee {

    constructor(name, type) {

        this.validateType(type);
        this._name = name;
        this._type = type;
    }


    validateType(arg) {

        if (!["engineer", "manager", "salesman"].includes(arg)) {
            throw new Error(`Employee cannot be of type ${arg}`);
        }
    }

    get type() {
        return this._type;
    }

    toString() {
        return `${this._name} (${this.type})`;
    }
}

class Engineer extends Employee {

    get type() {
        return "engineer";
    }
}

class Salesman extends Employee {

    get type() {
        return "salesman";
    }
}

function createEmployee(name, type) {
    switch (type) {
        case "engineer":
            return new Engineer(name, type);
        case "salesman":
            return new Salesman(name, type);
    }
        return new Employee(name, type);
}
