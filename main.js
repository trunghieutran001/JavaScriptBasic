/*
1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private?
    - 1 Tham số
    - Nhiều tham số
2. Truyền tham số
    - 1 tham số
    - Nhiều tham số
3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for of
*/
function writeLog(message, message2) {
    console.log(message)
    console.log(message2)
    console.log(typeof message)
}
writeLog('Test message', 'Test 2');


function writeLog1() {
    console.log(arguments)
}
writeLog1('Log 1', 'Log 2', 'Log 3');


function writeLog2() {
    for (var param of arguments) {
        console.log(param)
    }
}
writeLog2('Log 1', 'Log 2', 'Log 3');


function writeLog3() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString);
}
writeLog3('Log 1', 'Log 2', 'Log 3');



