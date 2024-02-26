var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 100
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 200
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 300
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

var i = 0;
var totalCoin = courses.reduce(function (total, course) {
    i++;
    console.log(i, total);

    return total + course.coin;
}, 0); // intial value
console.log(totalCoin);

//
var numbers = [100, 200, 220, 200, 480];
var totalNumber = numbers.reduce(function (total, numbers) {
    return total + numbers;
}, 0);
console.log(totalNumber);

//Flat - "Làm phẳng" mảng từ Depth Array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

// Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-end",
        courses1: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses1: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    },
];
var newCourses = topics.reduce(function (courses1, topic) {
    return courses1.concat(topic.courses1)
}, []);

console.log(newCourses);