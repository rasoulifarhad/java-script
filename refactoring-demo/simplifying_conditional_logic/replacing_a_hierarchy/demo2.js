function createBird(data) {
    switch (data.type) {
        case 'EuropeanSwallow':
            return new EuropeanShallow(data);
        case 'AfricanSwallow':
            return new AfricanShallow(data);
        case 'NorwegianBlueParrot':
            return new NorwegianBlueParrot(data);
        default:
            return new Bird(data); 
    }
}
class Bird {

    constructor(data) {
        this._name = data.name;
        this._plumage = data.plumage;
        this._speciesDelegate = this.selectSpeciesDelegate(data);
    }

    selectSpeciesDelegate(data) {

        switch (data.type) {
            case 'EuropeanShallow':
                return new EuropeanShallowDelegate();
            default:
                return null;
        }
    }

    get name() {
        return this._namel;
    }

    get plumage() {
        return this._plumage || "average";
    }

    get airSpeedVelocity() {
        return null;
    }
}

class EuropeanShallow extends Bird{

    get airSpeedVelocity() {
        return 35;
    }
}

class EuropeanShallowDelegate {

}

class AfricanShallow extends Bird {
    constructor(data) {
        super(data);
        this._numberOfCoconuts = data.numberOfCoconuts;
    }

    get airSpeedVelocity() {
        return 40 - 2 * this._numberOfCoconuts;
    }
}

class NorwegianBlueParrot extends Bird {

    constructor(data) {
        super(data);
        this._voltage = data.voltage;
        this._isNailed = data.isNailed;
    }

    get plumage() {
        if(this._voltage > 100) {
            return "scorched";
        } else {
            return this._plumage  ||  "beautiful";
        }
    }

    get airSpeedVelocity() {
        return (this._isNailed) ? 0 : 10 + this._voltage / 10;
    }
}
