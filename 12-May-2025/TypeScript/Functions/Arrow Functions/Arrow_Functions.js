function add(a, b) {
    return a + b;
}
var addArrow = function (a, b) { return a + b; };
console.log("Traditional:", add(2, 3));
console.log("Arrow:", addArrow(2, 3));
var getUser = function () { return ({
    name: "Jinendra",
    age: 24
}); };
console.log(getUser());
