let s = 0;
for (i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        s = s - 1 / i;
        s = parseFloat(s);
    }
    else {
        s = s + 1 / i;
        s = parseFloat(s);
    }
}
console.log(s);