// Monkey problem

function monkeyTrouble(aSmile,bSmile){
    if((aSmile == true && bSmile == true) || (aSmile == false && bSmile == false)){
        return true
    }

    else{
        return false
    }
}

console.log(monkeyTrouble(true,true))

// String times

function stringTimes(str_name , num){
    var i = 0
    var str;
    while(i<num){
        str += str_name
        i++
    }
}

console.log(stringTimes("Hi",3))

// luckySum

function luckySum(a,b,c){
    if(a==13){
        return 0;
    }
    else if(b==13){
        return a;
    }
    else if(c==3){
        return a+b;
    }
    else{
        return a+b+c;
    }
}
console.log(luckySum(1,2,13))

// caught speeding

function caught_speeding(speed, is_birthday){
    if(is_birthday == true){
        if(speed<65){
            return 0;
        }

        else if(speed >65 && speed < 85){
            return 1;
        }

        else{
            return 2;
        }
    }
    else{
        if(speed<60){
            return 0;
        }

        else if(speed >=60 && speed < 80){
            return 1;
        }

        else{
            return 2;
        }
    }

}

console.log(caught_speeding(90,true))

// make brics

function makeBrics(small,big,goal){
    small_brick=1
    big_brick =5
    if(goal == (small *small_brick) + (big * big_brick)){
        return true
    }
    else{
        return false;
    }
}

console.log(makeBrics(3,1,8))