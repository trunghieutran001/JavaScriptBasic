// Toán tử 3 ngôi - Ternary operator

var course = {
    name: 'JavaScript',
    coin: 0
}

// way 1
if (course.coin > 0) {
    console.log(`${course.coin} Coins`);
}
else {
    console.log('Free');
}

// way 2
var result = course.coin > 0 ? `${course.coin} Coins` : 'Free';
console.log(result);

// Example
var a = 1;
var b = 2;

var c = (a > 0) ? a : b;
console.log(c);