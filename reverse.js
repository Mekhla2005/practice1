let num = 12345;
let rev = 0;
while (num > 0) {
    n = num % 10;
    rev = rev * 10 + n;
    num = num / 10;
    num=parseInt(num);
}
console.log(rev);