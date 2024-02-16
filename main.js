// Làm việc với chuỗi

var myString = 'Hoc JS tai F8!';

//Keyword: JavaScript strign methods

// 1. Length
console.log(myString.length);

// 2. Find index
var myString = 'Hoc JS tai JS JS F8!';
console.log(myString.indexOf('JS'));
console.log(myString.lastIndexOf('JS'));
console.log(myString.indexOf('JS', 6));//tim tai vi tri bat dau, 6 o dau la vi tri bat dau
console.log(myString.indexOf('ABC')); // Khong tim thay se tra ve -1
console.log(myString.search('JS'));// Ho tro tiem kiem voi RegExp

// 3. Cut string
var myString = 'Hoc JS tai F8!';
console.log(myString.slice(4, 6));// Tham so 1: la vi tri bat dau cut, tham so 2: La cut den vi tri
console.log(myString.slice(4));
console.log(myString.slice(0));
console.log(myString.slice(-3, -1));

// 4. Replace
var myString = 'Hoc JS tai F8!';
console.log(myString.replace('JS', 'JavaScript'))

var myString = 'Hoc JS tai JS JS F8!';
console.log(myString.replace(/JS/g, 'JavaScript'))


// 5. Convert to upper case
var myString = 'Hoc JS tai F8!';
console.log(myString.toLocaleUpperCase());

// 6. Convert to lower case
console.log(myString.toLowerCase());

// 7. Trim
var myString = '   Hoc JS tai F8!   ';
console.log(myString)
console.log(myString.length);
console.log(myString.trim());
console.log(myString.trim().length);

// 8. Split
var languages = 'JavaScript, PHP, Ruby';
console.log(languages.split(', '))
var languages = 'JavaScript';
console.log(languages.split(''))

// 9. Get a character by index
var myString = 'Hoc JS tai F8!';
console.log(myString[10]);
