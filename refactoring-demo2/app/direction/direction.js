export default class Direction {

    constructor(direction) {
        
        this._direction = direction;
    }

    turnRight() {
        switch (this._direction) {
            case 'N':
                return new Direction('E')
            case 'S':
                return new Direction('W')
            case 'E':
                return new Direction('S')
            case 'W':
                return new Direction('N')
            default:
                throw new Error("invalid direction  ")
        }
    }

    turnLeft() {
        switch (this._direction) {
            case 'N':
                return new Direction('W')
            case 'S':
                return new Direction('E')
            case 'E':
                return new Direction('N')
            case 'W':
                return new Direction('S')
            default:
                throw new Error("invalid direction  ")
        }
    }
}