/*
Một số điều cần biết về function

1. Khi function đặt trung tên?
2. Khai báo biến trong hàm?
3. Định nghĩa hàm trong hàm?
*/

function showMessage() {
    console.log('Message 1');

};
function showMessage() {
    function showMessage2() {
        console.log('Message 2');
    }
    showMessage2();
}
/*function showMessage() {
    var fullName = 'Tran Hieu';
    console.log(fullName);
}*/

showMessage();
console.log = (fullName);

