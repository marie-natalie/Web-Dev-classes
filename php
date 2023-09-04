<?php

#single line comment
$firstName = "Clara";
$height = 6.5;
$age = 24;
$school = true;
$courses = ['BBIT', 'ICS'];

#checking data types
echo var_dump($firstName)
echo var_dump($height)
echo var_dump($age)
echo var_dump($school)
echo var_dump($courses)

function getProduct(){
	$num1 = 13;
	$num2 = 20;
	echo $num1 * $num2;
}
getProduct();
function myFunction($num1, $num2){
	return $num1 * $num2;
}
echo myFunction(100,728)

#output info
echo "<h1>Hello World $firstName </h1>" ;
echo "welcome".$firstName ;

?>