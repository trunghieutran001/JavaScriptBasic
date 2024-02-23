// For-of loop

// Array
var languages = [
    'JavaScript',
    'PHP',
    'Java'
];

for (var value of languages) {
    console.log(value);
}

// String
var myString = 'trunghieutran';
for (var text of myString) {
    console.log(text);
}

// Object
var myInfo = {
    name: 'Tran Hieu',
    age: 22
};

console.log(Object.keys(myInfo));

console.log(Object.values(myInfo));

for (var value of Object.keys(myInfo)) {
    console.log(value);
}

for (var value of Object.keys(myInfo)) {
    console.log(myInfo[value]);
}

for (var value of Object.values(myInfo)) {
    console.log(value);
}