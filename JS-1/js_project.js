/*

    The Spy has the same first letter of her First Name and Last Name</li>
     <li>The Spy is between the Age of 20 and 30 (exclusive of 20 and 30)</li>
     <li>The Spy is at least 170 centimeters tall.</li>
     <li>The Spy has a pet name that ends with the letter "y".</li>
*/

var firstName = prompt("What is your first name?")
var lastName = prompt("What is your last name?")
var age = prompt("What is your age?")
var height = prompt("What is your height?")
var petName = prompt("What is your pet's name?")

if((firstName[0]==lastName[0]) &&(age >=20 && age <=30) &&(height >=170) &&(petName.endsWith("y")) ){
    console.log("Welcome Spy")
}
else{
    console.log("Thanks for your details")
}