// solution to all problems
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,

    nameLength: function(){
        console.log("Length of object is "+ this.name.length)
    },

    announce: function(){
        alert("name is " + this.name + ", job is " + this.job + " and age is " + this.age)
    },

    lastName: function(){
        var last_name = employee["name"].split(" ")[1]
        console.log(last_name)
    }
  }

employee.nameLength()
employee.announce()
employee.lastName()