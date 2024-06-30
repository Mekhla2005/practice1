let Maths = 89;
let Physics = 96;
let Chem = 80;
let English = 75;
let Computer = 100;
let avg = (Maths + Physics + Chem + English + Computer) / 5;
if (avg > 90 && avg <= 100) {
    console.log("A");
}
else if (avg > 80 && avg <= 90) {
    console.log("B");
}
else if (avg > 70 && avg <= 80) {
    console.log("C");
}
else if (avg > 60 && avg <= 70) {
    console.log("D");
}
else if (avg > 50 && avg <= 60) {
    console.log("E");
}
else {
    console.log("F");
}