// لغة برمجه => هي الطريقه اللي بحادث فيها الاله بشكل مباشر بحيث انه نعطيها بعض الاوامر بلغتنا اللي احنا بنعرفها بقواعد معينه

// console.log('this is from js file');
// alert('this is alert');

//  data types in js
//  1 - string :> any symbols or characters enclosed in single or double quates "ahmad", 'ali', "hello world", "dbhfghdg"
//  2 - numbers :> integer or decimal numbers
//  3 - boolean :> true or false
//  4 - list or array :> collection of items enclosed in square brackets []  [1, 2, 3, 4 , 5, "hdfsfgh", true, false]
//  5 - object :> collection of key-value paris enclosed in curly braces {}  {name:"ahmad",age:20} key:value
//  6 - NaN :> not a number
//  7 - undefined :> variable has not been assigned a value انا عرفت متغير بس ما نسبت اله قيمه
//  8 - null :> value is explicitly set to null تحجز مكان للمتغير بس فش اله قيمه

//  variables in js
//  1- var
var age = 25 //global var
age = 30
// console.log("this is global var ", age)

//  2- let
let age1 = 25 //block scope , local to the block
age1 = 33
// console.log("local age : ",age1)

//  3- const
const age2 = 25
// console.log("constant age : ", age2)
test1 = "this is test variable"
// console.log("test variable : ", test1)

//  boolean
var isActive = true
// console.log("is active : ", isActive)

//   list and array
//   index : location value in a list starts from 0
var names = ["ahmed", "ali", "mohammed"]
// console.log("names : ", names) // names[0]
var sample = null
// console.log("sample : ", sample)

//   == : value , === :> value and data type
//   =>, =< , ==<, ==>, !=
// if(age2 == '25'){ 
//     console.log("the condition is true")  //answer
// }
// else{
//     console.log("ths condition is false")
// }

// console.log("___________________________________")

// if(age2 === '25'){
//     console.log("the condition is true")
// }
// else{
//     console.log("ths condition is false") //answer
// }

/*var navList = document.getElementById('navList');
console.log('search by id', navList);

var ulList = document.getElementsByClassName('ulList');
console.log('search by class', ulList);*/ //ulList[0]

/*var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
// h1.innerHTML = "this is from js";
h1.innerText = "this is from js";
h1.style.color = 'blue';
h1.style.backgroundColor = 'yellow'; */

// function
/*var body = document.getElementsByTagName('body')[0]
function changeBGRed(red){
    body.style.background = 'red';
}
function changeBGBlue(blue){
    body.style.background = 'blue';
}
function changeBGGreen(green){
    body.style.background = 'green';
}
function changeBGYellow(yellow){
    body.style.background = 'yellow';
}
function changeBGBlack(black){
    body.style.background = 'black';
}*/

var body = document.getElementsByTagName('body')[0];
function changeBG(color){
    body.style.backgroundColor = color;
}

var h1 = document.getElementsByTagName('h1')[0];
function changH1(){
    if(h1.innerHTML == "new page"){
    h1.innerText = "this is from js function";
    }
    else{
        h1.innerText = "new page";
    }
}

var screen = document.getElementById('screen');
function fullScreen(){
    // console.log(fullScreen)
    screen.requestFullscreen();
    document.exitFullscreen();
}