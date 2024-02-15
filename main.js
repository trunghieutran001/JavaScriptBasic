// Toán tử ++ --
// Prefix & Postfix

var a = 6;
//step 1: + 1 cho a, a = a + 1 -> a = 7
//step 2: Tra ve a sau khi được + 1
var output = ++a;
console.log('output', output);
console.log('a = ', a);

var b = 6;
//step 1: 'b copy', 'b copy' = 6
//step 2: +1 của b, b = b + 1 -> b = 7
//step 3: tra ve 'b copy'
var output = b++;
console.log('output', output);
console.log('b = ', b);

var number = 6;
var output = number++ + --number;
//6 + 6
console.log('output: ', output);

var output = ++number * 2 - number-- * 2;
// 7*2 -7*2
console.log('output: ', output);
