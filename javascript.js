console.log("External Js file")

 var firstName = "Clara";
 let lastName = true;
 const age = 12;
 var unit = null;
 var school = undefined;
 let ourArray = [12,13,15,11];
 let ourObject ={
 	firstName: "Clara",
 	lastName: true,
 	age:12,
 	studentDetails: function(){
 		console.log("The student is " +this.firstName +" She is " +this.age +" Years old")
 	}
 }

ourObject.studentDetails();
 console.log(typeof firstName);
 console.log(typeof lastName);
 console.log(typeof age);
 console.log("type of array is", typeof ourArray)
 console.log("Age of 3rd student is", typeof ourArray)

 ourObject.studentDetails();
 //arithmnetic operators
 let sum;
 sum = age + age
 console.log(sum);
 sum = sum + 1;
 console.log(sum);
 //comparison operators
 console.log(12!= 13);


