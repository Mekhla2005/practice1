let word = 'eye';
let c = word[0];
let ascii = c.charCodeAt(0);
console.log(ascii);
if (ascii >= 65 && ascii <= 90) {
    console.log("Capital letter");
}
else if (ascii >= 97 && ascii <= 122) {
    console.log("Small letter");
}