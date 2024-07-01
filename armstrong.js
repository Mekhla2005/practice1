for (i = 1; i <= 500; i++) {
    let arm = 0;
    let n=0;
    i1=i;
    while (i1 > 0) {
        n = i1 % 10;
        arm = (n * n * n) + arm;
        i1 = i1 / 10;
        i1 = parseInt(i1);
    }
    if (arm == i) {
        console.log(i);
    }
}