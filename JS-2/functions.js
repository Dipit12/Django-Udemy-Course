// functions will be our main building blocks, they will allow us to easily reuse code more than once and not constantly repeat ourselves

function add(a,b){
    return a+b;
}

function hello_world(){
    console.log("Hello World")
}
var x = prompt("Enter value of 1st number")
var y = prompt("Enter value of 2nd number")

console.log(add(x,y))
hello_world()

function formal(name = "Dipit",title = "Sir"){
    return title + " " + name;

}
formal()

function timesFive(numInput){
    var result = numInput * 5;
    // here result is the local variable
    return result;
}

console.log(timesFive(2))

// gloabl scope
var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff){
    console.log(v)
    stuff = "Reassign stuff inside func"
    console.log(stuff)
}
fun(stuff);