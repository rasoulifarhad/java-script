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

    get typeString() {
        return this._type.toString();
    }
    get type() {
        return this._type;
    }

    set type(arg) {
        this._type = Employee.createEmployeeType(arg);
    }

    static createEmployeeType(aString) {
        switch (aString) {
            case "engineer":
                return new Engineer();
            case "manager": 
                return new Manager();
            case "salesman":
                return new Salesman();
            default:
                throw new Error(`Employee cannot be of type ${aString}`);
        }
    }

    get capitalizedType() {
        return this._type.toString.charAt(0).toUpperCase() + this._type.toString.substr(1).toLowerCase();
    }

    toString() {
        return `${this._name} (${this.type.capitalizedName})`;
    }
}

class EmployeeType {

    constructor(aString) {
        this._value = aString;
    }

    get capitalizedName() {
        return this.toString.charAt(0).toUpperCase() + this.toString.substr(1).toLowerCase();
    }

    toString() {
        return this._value;
    }
}

class Engineer extends EmployeeType {

    toString() {
        return "engineer";
    }
}

class Manager extends EmployeeType {

    toString() {
        return "manager";
    }
}

class Salesman extends EmployeeType {

    toString() {
        return "salesman";
    }
}