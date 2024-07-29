function createBird(data) {
    return new Bird(data); 
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
                return new EuropeanShallowDelegate(data, this);
            case 'AfricanShallow':
                return new AfricanShallowDelegate(data, this);
            case 'NorwegianBlueParrot':
                return new NorwegianBlueParrotDelegate(data, this);
            default:
                return new SpeciesDelegate(data, this);
        }
    }

    get name() {
        return this._name;
    }

    get plumage() {
        if(this._speciesDelegate) {
            return this._speciesDelegate.plumage
        } else {
            return this._plumage || "average";
        }
    }

    get airSpeedVelocity() {
        return (this._speciesDelegate ) ? this._speciesDelegate.airSpeedVelocity : null;
    }
}

class SpeciesDelegate {

    constructor(data, bird) {
        this._bird = bird;
    }

    get plumage() {
        return this._bird._plumage || "average";
    }

}

class EuropeanShallowDelegate extends SpeciesDelegate {
    constructor(data, bird) {
        super(data, bird)
    }
    get airSpeedVelocity() {
        return 35;
    }

    get plumage() {
        return this._bird._plumage || "average";
    }
}

class AfricanShallowDelegate extends SpeciesDelegate {

    constructor(data, bird) {
        super(data, bird)
        this._numberOfCoconuts = data.numberOfCoconuts;
    }

    get airSpeedVelocity() {
        return 40 - 2 * this._numberOfCoconuts;
    }

    get plumage() {
        return this._bird._plumage || "average";
    }

}

class NorwegianBlueParrotDelegate extends  SpeciesDelegate {

    constructor(data, bird) {
        super(data, bird)
        this._voltage = data.voltage;
        this._isNailed = data.isNailed;
    }

    get plumage() {
        if(this._voltage > 100) {
            return "scorched";
        } else {
            return this._bird._plumage  ||  "beautiful";
        }
    }

    get airSpeedVelocity() {
        return (this._isNailed) ? 0 : 10 + this._voltage / 10;
    }

}
