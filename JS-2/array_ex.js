
var student_data = []

// add function
function add(name){
    student_data.push(name)
}

// remove function
function remove(index){
    if(student_data.length == 0){
        console.log("Array is empty")
    }
    else{
        student_data.splice(index,1)
    }
}

// print function
function display(){
    for(var i = 0;i<student_data.length;i++){
        console.log(student_data[i])
    }
}

// main function
function main(){
    while(true){
    var response = prompt("Enter the choice ADD/REMOVE/DISPLAY/EXIT")

    if(response == "ADD"){
        var name = prompt("Enter the name")
        add(name)
    }
    else if(response == "REMOVE"){
        var index = prompt("Enter the index")
        remove(index)
    }
    else if(response == "DISPLAY"){
        if(student_data.length == 0){
            console.log("Array is empty")
        }
        else{
            display()
        }
    }
    else if(response == "EXIT"){
        break;
    }
}
}
main()