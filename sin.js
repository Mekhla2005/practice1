let x = 1;
let sum = 0;
let t = 0;
for (i = 1; i <= 9; i += 2) {
    t++;
    if (t % 2 != 0) {
        sum = sum + Math.pow(x, i) / fact(i);
    }
    else {
        sum = sum - Math.pow(x, i) / fact(i);
    }
}
console.log(sum);
function fact(m) {
    let f = 1;
    for (j = m; j >= 1; j--) {
        f = f * j;
    }
    return f;

}