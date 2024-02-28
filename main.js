// forEach, find, filter, some, every, reduce

// some2()
Array.prototype.some2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this))
                return true;
        }
        else
            return false;
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
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 250
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
];
var isFree = courses.some2(function (course, index, array) {
    console.log(index);
    return course.coin === 4;
});
console.log(isFree);