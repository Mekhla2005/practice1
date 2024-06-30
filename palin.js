let num = 12345;
let rev = 0;
num1=num;
while (num1 > 0) {
    n = num1 % 10;
    rev = rev * 10 + n;
    num1 = num1 / 10;
    num1=parseInt(num1);
}
if(num==rev)
    {
        console.log("palindrome");
    }
    else{
        console.log("not palindrome");
    }