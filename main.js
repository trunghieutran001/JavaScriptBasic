// for-in loop
var myInfo = {
    name: 'Hieu Tran',
    age: 18,
    address: 'Ha Noi, VN'
};

for (var key in myInfo) {
    console.log(key);
}

for (var key in myInfo) {
    console.log(myInfo);
}

for (var key in myInfo) {
    console.log(myInfo[key]);
}
// case 2: Array
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Java'
];
for (var key in languages) {
    console.log(key);
}

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Java'
];
for (var key in languages) {
    console.log(languages[key]);
}

var myString = 'JavaScript';
for (var key in myString) {
    console.log(myString[key]);
}