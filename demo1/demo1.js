function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
//布尔值 
var isDone = false;
//数字
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
var name = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name + ".\n\t\t\t\t\t\tI'll be " + (age + 1) + " years old next month.";
// 数组
var list = [1, 2, 3];
var list = [1, 2, 3];
// 元组 Tuple
// Declare a tuple type
var x;
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
// Any
var notsure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var list = [1, true, "free"];
list[1] = 100;
// Null 和 Undefined
var u = undefined;
var n = null;
// 类型断言
// 类型断言有两种形式。 其一是“尖括号”语法：
var someValue = "this is a string";
var strLength = someValue.length;
// 另一个为as语法：
var someValue = "this is a string";
var strLength = someValue.length;
// 类
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + this.age;
    };
    return Person;
}());
var person = new Person('muyy', 23);
console.log(person.print()); // muyy23
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = {
    "label": "hello Interface"
};
printLabel(myObj);
