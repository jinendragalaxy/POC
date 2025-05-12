//constructor class ka special method hota hain jiska kaam hai sab se pehle chalna and saare variables ko initialize karna

class Pendrive{
    public company : string

    constructor(name : string){
        this.company = name
    }
}

let p1 = new Pendrive("hp")
console.log(p1)
