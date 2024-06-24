function plumages(birds) {
    return new Map(birds
        .map(b => createBird(b))
        .map(b => [b.name, b.plumage]));
}

function speed(birds) {
    return new Map(birds
        .map(b => createBird(b))
        .map(b => [b.name, b.airSpeedVelocity]));
}

function plumage(bird) {
    return createBird(bird).plumage();
}

function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity();
}

function createBird(bird) {
    switch (bird.type) {
        case 'EuropeanSwallow':
            return new EuropeanSwallow(bird);
        case 'AfricanSwallow':
            return new AfricanSwallow(bird);
        case 'NorwegianBlueParrot':
            return new NorwegianBlueParrot(bird);
        default:
            return new Bird(bird);
    }
}

class EuropeanSwallow extends Bird{
    get plumage() {
        return "average";
    }

    get airSpeedVelocity() {
        return 35;
    }
}

class AfricanSwallow extends Bird{
    get plumage(){
        return (this.numberOfCoconuts > 2) ? "tired" :  "average";
    }
   
    get airSpeedVelocity() {
        return 40 - 2 * this.numberOfCoconuts;        
    }
}
class NorwegianBlueParrot extends Bird{
    get plumage() {
        return (this.voltage > 100) ? "scorched" : "beautiful";
    }
   
    get airSpeedVelocity() {
        return (this.isNailed) ? 0 : 10 + this.voltage / 10;
    }
}

class Bird {

    constructor(birdObject) {
        Object.assign(this, birdObject)
    }

    get plumage() {
        return "unknown";
    }

    get airSpeedVelocity() {
        return null;
    }
}