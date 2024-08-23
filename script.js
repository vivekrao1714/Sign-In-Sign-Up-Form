let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

signInBtn.addEventListener('click',()=>{
nameField.style.maxHeight='0';
title.innerHTML = 'sign In';
text.innerHTML = 'Lost Password';
signUpBtn.classList.add('disable');
signInBtn.classList.remove('disable');
underline.style.transform = 'translateX(35px)'
});


signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight='60px';
    title.innerHTML = 'sign Up';
   text.innerHTML = 'Password Suggestion';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0px)'
    });
    
    eyeicon.onclick = function (){
        if(password.type == "password"){
            password.type = "text";
            eyeicon.src ="eye-open.png"
        }else{
            password.type = "password";
             eyeicon.src ="eye-close.png"
        }
    }


   
