// 1. Xác định điểm dừng
// 2. Logic handle -> Tạo ra cái điểm dừng

//vi du 1
function countDown(num) {
    if (num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(10);

function loop(start, end, cb) {
    if (start <= end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}

//vi du 2
var array = ['JavaScript', 'PHP', 'Ruby'];

loop(0, array.length - 1, function (index) {
    console.log('index', index);
})

// Vi du 3 
// 3*2*1 =
// 6*5*...*1=
function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1);
    }
    return 1;
}

console.log(giaiThua(6));