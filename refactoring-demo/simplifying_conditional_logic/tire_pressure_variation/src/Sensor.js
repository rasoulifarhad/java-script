function offset() {
    return 16;
};

function samplePressure() {
    var pressureTelemetryValue = Math.floor(6 * Math.random() * Math.random());
    return pressureTelemetryValue;
}

export default class Sensor {
    popNextPressurePsiValue() {
        var pressureTelemetryValue = samplePressure();
        return offset() + pressureTelemetryValue;
    }
}