class AirCondtioner {
    color = 'White';
    tons = 1;
    comapny = 'Voltas'

    temperature = 22

    turnOn(name : string){
        console.log(`Turning on ${name}`);
        console.log("Turned on.");
    }

    turnOff(name : string){
        console.log(`Turning ff ${name}`);
        console.log("Turned off.");
    }

    increaseTemperature(name: string){
        this.temperature++;
        console.log(`${name} temperature set to :`,this.temperature)
    }

    decreaseTemperature(name: string){
        this.temperature--;
        console.log(`${name} temperature set to :`,this.temperature)
    }
}

let ac1 = new AirCondtioner()
let ac2 = new AirCondtioner()

ac1.turnOn("ac1");
ac2.turnOn("ac2");

ac1.increaseTemperature("ac1");
ac1.decreaseTemperature("ac1")
