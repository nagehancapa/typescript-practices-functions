function hello(name) {
    return "Hello " + name;
}
var hello2 = function (name) {
    return "Hello " + name;
};
function add(num1, num2) {
    return num1 + num2;
}
function calculator(fun) {
    console.log(fun(10, 20));
}
function calculator2() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
function display(id, name, role) {
    console.log("id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
function display2(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    console.log("id", id);
    console.log("Name", name);
    console.log("Role", role);
}
console.log(hello("nagehan"));
console.log(add(10, 20));
display(1, "Nagehan", "Admin");
display(2, "Ada");
display2(3, "Birol");
display2(4, "Zehra", "Admin");
calculator(add);
var sub = calculator2();
console.log(sub(20, 5));
console.log(hello2("nagehan"));
