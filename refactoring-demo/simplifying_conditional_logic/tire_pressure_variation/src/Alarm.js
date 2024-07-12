import Sensor  from "./Sensor";

var alarmOn = Symbol();

export default class Alarm {

    constructor() {
        this.lowPressureThreshold = 17;
        this.highPressureThreshold = 21;
        this.sensor = new Sensor();
        this[alarmOn] = false;
    }

    check() {
        const psiPressureValue = this.sensor.popNextPressurePsiValue();
        if(psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < psiPressureValue) {
            if(!this[alarmOn]) {
                this[alarmOn] = true;console.log("Alarm Activated!");
            }
        } else {
            if(this[alarmOn]) {
                this[alarmOn] = false;
                console.log("Alarm Deactivated!");
            }
        }
    }
}