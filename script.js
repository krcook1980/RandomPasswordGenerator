// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //prompt option to select character length
  var input = (prompt("Please select the length of your password? Must be between 8 and 128 characters in length."));
  var length = parseInt(input);

  if (length > 7 && length < 129) {
    //alert option to select special characters
    var special = (confirm("Do you want to use special characters? Ok for yes, cancel for no."));
    //alert option to select lower case
    var lower = (confirm("Do you want to use lower case characters? Ok for yes, cancel for no."));
    //alert option to select upper case
    var upper = (confirm("Do you want to use upper case characters? Ok for yes, cancel for no."));
    //alert option to select numbers
    var number = (confirm("Do you want to include numbers? Ok for yes, cancel for no."));
  }
  //if they pick a number outside of given length make them try again.
  else {
    var length = (alert("No really, you have to pick a number between 8 and 128 characters in length."));

  }

  //set characters for each option
  var strSpecial = "!#$%&(')/:?@~";
  var strLower = "abcdefghijklmnopqrstuvwxyz";
  var strUpper = strLower.toUpperCase();
  var strNum = "1234567890";
  var count = 0;
  var passwordArr = [];

  //length chosen divided by true
  function addMe(string) {
    count = count + 1;
   
    //push the string into the array
    passwordArr.push(string);

    //Use the random to replace first push
    passwordArr.splice(count - 1, 1, string.charAt(Math.floor(Math.random() * (string.length))));
    }

  for (var i = count; i < length; i++) {

    //determine if type was selected and run addMe if it was
    if (count < length && special === true) {
      addMe(strSpecial);
    }

    if (count < length && lower === true) {
      addMe(strLower);
    }
    if (count < length && upper === true) {
      addMe(strUpper);
    }
    if (count < length && number === true) {
      addMe(strNum);
    }

  }

  //take all accepted info and concat into a password
    return passwordArr.join("");

}
//Put that in the webpage now
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  document.getElementById("password").innerHTML = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);