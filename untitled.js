if (fullname == "" || address =="" || useremail =="" || number =="" || age =="" || gender =="" amountPM =="" || password =="" ) {
  	alert("Field should not be blank"); }


   if (!/^[a-zA-Z]+$/.test(name)) {
      showAndHideAlert('Name should only contain alphabets.', 2000);
      return false;
    }
  else {
      document.getElementById('result1').innerHTML = "";
    }

   if (password.length < 8){
  	document.getElementById('result2').innerHTML = 
     "Password should have atleast 8 characters";
     return false;
  }
  else {
         
      document.getElementById('result2').innerHTML =
        "Password length is correct!";
  }
 
  if (password.match(/^[0-9A-Z]+$/)){
 document.getElementById('result3').innerHTML = 
     "Passwords should have numbers and Uppercase alphabets only";
     return true;
  }
  else {
    return false
    }

  else {
         
      document.getElementById('result4').innerHTML = "";
  }
 
// Calculate age based on date of birth
    var age = calculateAge(dob);
    if (age < 18) {
      showAndHideAlert('User should be above 18', 2000);
      return false;
}
  // Validate password (at least one number and one uppercase letter)
    if (!/(?=.*\d)(?=.*[A-Z])/.test(password)) {
      showAndHideAlert('Password must have at least one number and one uppercase letter.', 2000);
      return false;
    }
     // Show success message with the chosen account type and username
    var message = 'You have successfully registered for a ' + Selection + '.\nWelcome, ' + firstname + '.';
    showAndHideAlert(message, 3000);

 // Submit the form after a delay
    setTimeout(function () {
      document.forms[0].submit();
    }, 3000); // 3000 milliseconds (3 seconds) delay for the alert to disappear

    return false; // Return false to prevent the form from submitting immediately
  }
   function showAndHideAlert(message, duration) {
    var alertBox = document.createElement('div');
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50%';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translate(-50%, -50%)';
    alertBox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    alertBox.style.color = '#fff';
    alertBox.style.padding = '10px 20px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.zIndex = '9999';
    alertBox.textContent = message;
    document.body.appendChild(alertBox);

    setTimeout(function () {
      document.body.removeChild(alertBox);
    }, duration);
  }

  function calculateAge(dob) {
    var dobDate = new Date(dob);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dobDate.getFullYear();
    var monthDiff = currentDate.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dobDate.getDate())) {
      age--;
    }
    return age;
  }
  

alert("success");
return true;
}

