// forEach, find, filter, some, every, reduce

// find2()
Array.prototype.filter2 = function (callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
        }
        if (result) {
            output.push(this[index]);
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
var filterCourses = courses.filter2(function (course, index, array) {
    return course.coin > 250;
});
console.log(filterCourses);