const score = 85;

if(score >= 90){
    console.log("A");
}else if (80 <= score && score < 90){
    console.log("B");
}else if (70 <= score && score < 80){
    console.log("C");
}else if (60 <= score && score < 70){
    console.log("D");
}else{
    console.log("F");
}

function getScore(score){
    let grade;
    if(score >= 90){
        grade="A";
    }else if (80 <= score && score < 90){
        grade="B";
    }else if (70 <= score && score < 80){
        grade="C";
    }else if (60 <= score && score < 70){
        grade="D";
    }else{
        grade="F";
    }
    return grade;
}

//**call function */
console.log(getScore(89));