var AirCondtioner = /** @class */ (function () {
    function AirCondtioner() {
        this.color = 'White';
        this.tons = 1;
        this.comapny = 'Voltas';
        this.temperature = 22;
    }
    AirCondtioner.prototype.turnOn = function (name) {
        console.log("Turning on ".concat(name));
        console.log("Turned on.");
    };
    AirCondtioner.prototype.turnOff = function (name) {
        console.log("Turning ff ".concat(name));
        console.log("Turned off.");
    };
    AirCondtioner.prototype.increaseTemperature = function (name) {
        this.temperature++;
        console.log("".concat(name, " temperature set to :"), this.temperature);
    };
    AirCondtioner.prototype.decreaseTemperature = function (name) {
        this.temperature--;
        console.log("".concat(name, " temperature set to :"), this.temperature);
    };
    return AirCondtioner;
}());
var ac1 = new AirCondtioner();
var ac2 = new AirCondtioner();
ac1.turnOn("ac1");
ac2.turnOn("ac2");
ac1.increaseTemperature("ac1");
ac1.decreaseTemperature("ac1");
