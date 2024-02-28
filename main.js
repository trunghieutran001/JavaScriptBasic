// forEach, find, filter, some, every, reduce

// every2()
Array.prototype.every2 = function (callback) {
    var output = true;
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (!callback(this[index], index, this)) {
                output = false;
                break;
            }

        }
    }
    return output;
}
var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 200
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 200
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 200
    },
    {
        id: 4,
        name: 'PHP',
        coin: 200
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 200
    }
];
var isFree = courses.every2(function (course, index, array) {
    console.log(index);
    return course.coin === 200;
});
console.log(isFree);