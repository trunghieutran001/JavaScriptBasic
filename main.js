// do while loop

var a = 0;
var isSuccess = false;

do {
    a++;
    console.log('Nạp thẻ lần ' + a);
    // Thành công
    if (false) {
        isSuccess = true;
    }

} while (!isSuccess && a <= 3);