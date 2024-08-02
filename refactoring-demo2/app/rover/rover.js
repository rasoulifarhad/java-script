import Position from "./position";

export default class Rover {

    constructor(x, y, direction) {
        this._x = x;
        this._y = y;
        this._direction = direction;
    }

    navigate(instructions) {
        for(let i = 0; i < instructions.length; i++) {
            const command = instructions.charAt(i);
            if (command === "M") {

            }
            if(command === "L") {

            }
            if(command === "R") {

            }
        }
        return new Position(this._x, this._y, this._direction);
    }
}