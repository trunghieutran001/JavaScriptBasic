// Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Hieu', 'Tran', 'Avatar');
var user = new User('Vu', 'Nguyen', 'Avatar');

author.title = 'Hello member';
user.comment = 'Xin chao admin';
console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());