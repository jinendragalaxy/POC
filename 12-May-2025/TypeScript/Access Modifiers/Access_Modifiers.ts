/* class Pendrive{
    name = 'Pendrive';
    getName(){
        console.log(this.name);
    }
}

let p1 = new Pendrive()
p1.getName()

p1.name = 'SUper Penrive'

p1.getName()
*/

/* Private */

/* class User {
   private balance = 1200; //private can be used withing class

   getBalance(){
    console.log(this.balance);
   }
}

let user1 = new User()

user1.getBalance() */

/*Protected*/

class User {
    protected balance = 1200
}

class Admin extends User {
    private isAdmin =  true
    getBalance(){
        console.log(this.balance); 
    }
}

let p1 = new Admin()
p1.getBalance()