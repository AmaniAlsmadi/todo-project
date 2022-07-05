'use strict'

let userName =prompt("What is your name?");
console.log(userName);


let gender =prompt("What is your gender?");
console.log(gender);

if(gender == "female"){
    gender="Ms";
}else if (gender == "male"){
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
if(welcomeMsg == false ){
alert( "welcome "+ gender +" "+ userName)
};

let moreQuestions = prompt("do you like to answer more questions?");
console.log(moreQuestions);
let question1,question2,question3;
if(moreQuestions == ""){
    alert("invalid");
}else {
    question1 = confirm("Do you like our wibsite?");
    question2 = confirm("Do you like js?");
    question3 = confirm("Do you want to continue?");
} 
console.log(question1);
console.log(question2);
console.log(question3);

const userAnswer = [userName, gender, age, moreQuestions ,question1, question2 , question3];
console.log(userAnswer);
