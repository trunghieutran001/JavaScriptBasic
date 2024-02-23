/*
    Object prototype - Basic
    1. Prototype là gì?
    2. Sử dụng khi nào?
*/
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
} s

User.prototype.className = 'F8';
User.prototype.getClassName = function () {
    return this.className;
}

var user = new User('Hieu', 'Tran', 'Avatar 1');
var user1 = new User('Howard', 'Tran', 'Avatar 2');


console.log(user.className);
console.log(user1.getClassName());