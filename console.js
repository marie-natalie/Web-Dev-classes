//getting
let number1 =
document.getElementByID("number1");
let number2 =
document.getElementByID("number2");

console.log(number1);
console.log(number2);
//function to get product
function getProduct(){
		let ourProduct = 
		number1.value * number2.value;
		//console.log(ourProduct);
		//alert("Your product is " +ourProduct)
		//document.getElementByID("result").innerHTML
		let ourResult = document.getElementByID("result")
		ourResult.innerHTML = "Product is " +ourProduct
		return false;
	}
//get html elements 
let ourParagraphs = document.getElementsByTagName('p');
console.log(ourParagraphs[1]);