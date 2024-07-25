class Person {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    get genderCode() {
        return "X";
    }
}

class Male extends Person {

    get genderCode() {
        return "M";
    }
}

class Female extends Person {

    get genderCode() {
        return "F";
    }
}

function createPerson(name) {
    return new Person(name);
}

function createMale(name) {
    return new Male(name);
}

function createFemale(name) {
    return new Female(name);
}

function loadFromInput(data) {
    return data
            .map(aRecord => createPerson(aRecord));
}

function createPerson(aRecord) {
    switch (aRecord.gender) {
        case "M":
            return new Male(aRecord.name);
        case "F":
            return new Female(aRecord.name);
        default:
            return new Person(aRecord.name);
    }
}

let people = [];
const numberOfMales = people.filter(p => p instanceof Male).length;