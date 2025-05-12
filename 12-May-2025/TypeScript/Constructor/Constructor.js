//constructor class ka special method hota hain jiska kaam hai sab se pehle chalna and saare variables ko initialize karna
var Pendrive = /** @class */ (function () {
    function Pendrive(name) {
        this.company = name;
    }
    return Pendrive;
}());
var p1 = new Pendrive("hp");
console.log(p1);
