/*
Kiểu dữ liệu trong JavaScript

1. Kiểu dữ liệu nguyên thủy - Primitive Data
    - Number
    - String
    - Boolean
    - Underfined
    - Null
    - Symbol

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object
*/

//Number type
var a = 1;
var b = 2;
var c = 1.5;

console.log(typeof a);

//string type
var fullName = 'Trung Hieu Tran';
console.log(typeof fullName);

// Boolean type
var isSuccess = false;
console.log(typeof isSuccess);

// undefined type
var age;
console.log(typeof age);

// Null
var isNull = null;

//Symbol
var id = Symbol('id'); //unique
var id2 = Symbol('id'); //unique

//Function
var myFunction = function () {
    alert('Hi. Xin choa cac ban');
};
console.log('Function type: ', typeof Object);

//Object types
var myObject = {
    name: 'Tran Hieu',
    age: 18,
    address: 'Ha Noi',
    myFunction: function () { }

};
console.log('Object: ', myObject);
console.log('Object type: ', typeof myObject);

//Array type
var myArray = ['JavaScript', 'PHP', 'Ruby'];
console.log(myArray);
console.log('Array type: ', typeof myArray);