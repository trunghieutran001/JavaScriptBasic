// Hiểu hơn về câu lệnh điều kiện
// Và phép o sánh

/*
    0
    ''
    null
    undefined
    NaN
    false
*/
var a = 1;
var b = 2;

//AND
var result1 = 'A' && 'B' && 'C';
var result2 = null && 'B' && 'C';

//OR
var result3 = 'A' || undefined || 'C';

console.log(result1);
console.log(result2);

if (result3) {
    console.log('Dieu kien dung');
}
else {
    console.log('Dieu kien sai');
}