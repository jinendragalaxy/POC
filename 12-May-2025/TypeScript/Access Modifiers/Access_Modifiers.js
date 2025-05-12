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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var User = /** @class */ (function () {
    function User() {
        this.balance = 1200;
    }
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdmin = true;
        return _this;
    }
    Admin.prototype.getBalance = function () {
        console.log(this.balance);
    };
    return Admin;
}(User));
var p1 = new Admin();
p1.getBalance();
