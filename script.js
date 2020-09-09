function getFormvalue() {
  event.preventDefault();
  var firstName = document.getElementsByTagName("INPUT")[0].value;
  var lastName = document.getElementsByTagName("INPUT")[1].value;
  console.log("First Name: " + firstName);
  console.log("Last Name: " + lastName);
  document.getElementById("output").innerHTML = firstName + " " + lastName;
}