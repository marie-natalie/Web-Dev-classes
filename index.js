//functions
{
	let lastName = "Tim";
}
function findSum(){
	let number1 = 12;
	let number2 = 14;
	return number1 + number2;
}
let newSum = findSum();
console.log(findSum());

//function with parameters
function getProduct(num1,num2){
	return num1 *num2;
}
let myProduct;
myProduct = getProduct(5,2);
console.log("product value is " + myProduct)

//conditional statements
let age = 18;
if (age < 17){
	console.log("Too young");
}
else if(age==18){
	console.log("perfect")
}
else{
	console.log("perfect")
}

//looping
for(let i = 1; i < 6; i++){
	console.log("This is sentence " i);
}