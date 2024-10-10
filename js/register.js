var registerForm = document.getElementById('registerForm');
var username = document.getElementById('form3Example1c');
var email = document.getElementById('form3Example3c');
var password = document.getElementById('form3Example4c');
var confirmPassword = document.getElementById('form3Example4cd');
var allUsers = JSON.parse(localStorage.getItem('userData')) || [];

registerForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    console.log(confirmPassword.value);

    // Object
    // key: value
    var userData = {
        username: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }
    console.log(allUsers);
    if(password.value == confirmPassword.value){
    allUsers.push(userData);
    }
    else{
        alert("The password and the confirmPassword must be the same");
    }

    // JSON: javascript object nation اوبجكت على هيئة سترينغ
    localStorage.setItem('userData', JSON.stringify(allUsers));
})