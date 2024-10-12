var registerForm = document.getElementById('registerForm');
var button = document.getElementById('button');
var email = document.getElementById('form2Example1');
var password = document.getElementById('form2Example2');
var allUsers = JSON.parse(localStorage.getItem('userData')) || [];

button.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(allUsers);
    // console.log(password.value);

    for(var i=0; i<allUsers.length; i++){ //طول هاي الليست
        /*if(allUsers[i].email == email.value && allUsers[i].password == password.value){
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "You login successful",
                showConfirmButton: false,
                timer: 2000 //1500
              });
            // window.location.href = 'index.html';
        }
        else{
            Swal.fire({
                icon: "error",
                title: "You login invalid",
                text: "wrong email or password",
                // footer: '<a href="#">Why do I have this issue?</a>'
              });
        }*/

              if(allUsers[i].email != email.value){
                Swal.fire({
                            icon: "error",
                            title: "wrong email",
                            text: "Something went wrong!",
                            footer: '<a href="#">Why do I have this issue?</a>'
                          });
            }
            else if(allUsers[i].password != password.value){
                Swal.fire({
                            icon: "error",
                            title: "wrong password",
                            text: "Something went wrong!",
                            footer: '<a href="#">Why do I have this issue?</a>'
                          });
            }
            else{
                Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "email already exists",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          window.location.href = 'index.html'
            }
    }
})

    //OR
    /*var userFound = false;
    for(var i=0; i<allUsers.length; i++){ //طول هاي الليست
        if(allUsers[i].email == email.value && allUsers[i].password == password.value){
            userFound = true;
        }
    }
    if(userFound){
        alert('login successful check your email and password');
            // window.location.href = 'index.html';
    }
    else{
        alert('login failed check you email and password');
    }*/