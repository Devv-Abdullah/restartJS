/*var mainH1 = document.getElementById('mainH1');
mainH1.addEventListener('click', function(){
    if(mainH1.style.color === 'black'){
    mainH1.style.color = 'red';
    }
    else{
        mainH1.style.color = 'black';
    }
})*/

var mainH1 = document.getElementById('mainH1');
var userForm = document.getElementById('userForm');
var users = document.getElementById('users');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');

userForm.addEventListener('submit', function(event){
    event.preventDefault();
    // create element
    var firstH1 = document.createElement('h1');
    firstH1.innerHTML = "this is fname: "+fname.value + " | this is lname: "+ lname.value;
    console.log(firstH1);
    firstH1.style.color = 'red';
    // append or appendChild
    users.appendChild(firstH1);
})