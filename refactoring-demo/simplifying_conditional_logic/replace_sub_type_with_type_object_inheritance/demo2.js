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
        this._type = arg;
    }

    get capitalizedType() {
        return this._type.toString.charAt(0).toUpperCase() + this._type.toString.substr(1).toLowerCase();
    }

    toString() {
        return `${this._name} (${this.capitalizedType})`;
    }
}

class EmployeeType {

    constructor(aString) {
        this._value = aString;
    }

    toString() {
        return this._value;
    }
}
