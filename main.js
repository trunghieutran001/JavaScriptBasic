// Object trong JavaScript

var emailKey = 'email';
var myInfo = {
    name: 'Tran Hieu',
    age: 18,
    address: 'Ha Noi, VN',
    [emailKey]: 'trunghieutran@gmail.com',
    getName: function () {
        return this.name;
    },
    getAge: function () {
        return this.age;
    }
};

myInfo.email = 'trunghieutran@gmail.com';
console.log(myInfo);

var myKey = 'address';

console.log(myInfo);

delete myInfo.address;
console.log(myInfo);

console.log(myInfo.getName());
console.log(myInfo.getAge());
// function --> Phương thức / method
// other --> Thuộc tính / property