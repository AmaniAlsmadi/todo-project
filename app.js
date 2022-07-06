'use strict'
const answerArray = [];

let userName =prompt("What is your name?");
console.log(userName);


let gender =prompt("What is your gender?");
console.log(gender);

if(gender.toLowerCase() == "female"){
    gender="Ms";
}else if (gender.toLowerCase() == "male"){
    gender="Mr";
}else {
    gender="";
};

let age = prompt("How old are you?");
console.log(age);
if (age <= 0){
    alert("Wrong age" );
};

let welcomeMsg = confirm("Do you wants to skip the welome message?");
if(welcomeMsg === false ){
alert( "welcome "+ gender +" "+ userName)
};

let moreQuestions = confirm("do you like to answer more questions?");
console.log(moreQuestions);
let question1,question2,question3;
if(moreQuestions){

     question1 = askQuestion("Do you like our wibsite?");
     question2 = askQuestion("Do you like js?");
     question3 = askQuestion("Do you want to continue?");
}


const userAnswer = [userName, gender, age, moreQuestions ,question1, question2 , question3];
console.log(userAnswer);

    //functions:
    function askQuestion(question){
        let qPrompt = prompt(question);
        if(qPrompt.toLowerCase() === 'yes' || qPrompt.toLowerCase() === 'no'){
            return qPrompt;
         }else if (qPrompt === ""){
            return alert("invalid");
         }
        
    }

   
