const num1 = 12;

const num2 = 25;

const num3 = 89;

let largest;

if(num1 >= num2 && num1 >= num3) {

    largest = num1;



}

else if (num2 >= num1 && num2 >= num3) {

    largest = num2;

}

else {

    largest = num3;

}

console.log("The largest number is " + largest);