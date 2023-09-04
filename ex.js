function validateForm(){
	const fullname = document.getElementById("fullname").value;
	const address = document.getElementById("address").value;
	const useremail = document.getElementById("useremail").value;
    const number = document.getElementById("number").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const amountPM = document.getElementById("amountPM").value;
    const password = document.getElementById("password").value;
    const AccountType = document.getElementById("AccountType").value;
}

// Regular expressions for validation
  const nameRegex = /^[a-zA-Z]+$/;
  const ageRegex = /^\d+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;

  // Error message elements
  const errorfullname = document.getElementById("errorfullname");
  const erroraddress = document.getElementById("erroraddress");
  const erroruseremail = document.getElementById("erroruseremail");
  const errornumber = document.getElementById("errornumber");
  const errorage = document.getElementById("errorage");
  const errorgender = document.getElementById("errorgender");
  const erroramountPM = document.getElementById("erroramountPM");
  const errorpassword = document.getElementById("errorpassword");
  const errorAccountType = document.getElementById(" errorAccountType")

  // Reset error messages
  errorfullname.textContent = "";
  erroraddress.textContent = "";
  erroruseremail.textContent = "";
  errornumber.textContent = "";
  errorage.textContent = "";
  errorgender.textContent = "";
  erroramountPM.textContent = "";
  errorpassword.textContent = "";
  errorAccountType.textContent = "";


  // Validation steps
  let isValid = true;

  if (fullname.trim() === "") {
    errorfullname.textContent = "Please enter your Full Name.";
    isValid = false;
  } else if (!nameRegex.test(fullname)) {
    errorfullname.textContent = "Name should only contain alphabets.";
    isValid = false;
  }

  if (address.trim() === "") {
    erroraddress.textContent = "Please enter your Address";
    isValid = false;
  }


  if (useremail.trim() === "") {
    erroruseremail.textContent = "Please enter your Email.";
    isValid = false;
  }

  if (number === "") {
    errornumber.textContent = "Please enter your Mobile Phone.";
    isValid = false;
  }

  if (age === "") {
    errorage.textContent = "Please enter your Date of Birth.";
    isValid = false;}


  if (gender === "") {
    errorage.textContent = "Please fill in your gender.";
    isValid = false;}

  if (amountPM === "") {
    erroramountPM.textContent = "Please enter an Amount per month.";
    isValid = false;
  }
 
  if (password.trim() === "") {
    errorpassword.textContent = "Please enter your Password.";
    isValid = false;
  } else if (!passwordRegex.test(password)) {
    errorpassword.textContent = "Password should contain at least one uppercase letter and one number.";
    isValid = false;
  }

  if (AccountType === "") {
    errorAccountType.textContent = "Please select an Account Type.";
    isValid = false;
  }

// Display success message or return validation status
  if (isValid) {
    // Validation successful, allow form submission
    const username = fullname;
    const userAge = calculateAge(age);
    if (userAge >= 18) {
      alert("You (" + username + ") have successfully registered as " + AccountType + ".");
      return true;
    } else {
      errorage.textContent = "You must be at least 18 years old to register.";
      return false;
    }
   else {
  // Validation failed, show error messages and prevent form submission

    return false;
  }
  return false
}

function calculateAge(age) {
  const birthDate = new Date(age);
  const today = new Date();
  let ageValue = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    ageValue--;
  }
  return age;
}