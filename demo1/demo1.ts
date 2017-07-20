interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);

//布尔值 
let isDone: boolean = false;

//数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.
						I'll be ${ age + 1 } years old next month.`;

// 数组
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// 元组 Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error

// 枚举
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];


// Any
let notsure : any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
let list: any[] = [1, true, "free"];
list[1] = 100;


// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;

// 类型断言

// 类型断言有两种形式。 其一是“尖括号”语法：

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

// 另一个为as语法：

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;




// 类

class Person{
    name:string; // 这个是对后文this.name类型的定义
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    print(){
        return this.name + this.age;
    }
}
let person:Person = new Person('muyy',23)
console.log(person.print()) // muyy23

// 接口


interface LabelValue{
    label: string;
}
function printLabel(labelObj: LabelValue){
    console.log(labelObj.label);
}
let myObj = {
    "label":"hello Interface"
};
printLabel(myObj);


