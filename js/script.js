let formLogin = document.getElementById("form-login");
let user = document.getElementById("user");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let loginBust = document.querySelector(".login-bust");
let loginPassword = document.querySelector(".login-padlock");

let registeredUser = "admin";
let passwordUser = "admin";

let loginHome = [];

submit.addEventListener("click", function(e){
    e.preventDefault()

    let login = {
        user: '',
        password: ''
    }

    if(registeredUser === user.value && passwordUser === password.value) {
        login.user = user.value;
        login.password = password.value;
        loginHome.push(login);
        localStorage.setItem("login", JSON.stringify(login));
        user.value = '';
        password.value = '';
        window.location.href = "http://localhost:5500/home.html";
    }
})

user.addEventListener('input', function(){
  if(!this.value == ''){ 
    loginBust.classList.remove('login-bust');     
    loginBust.classList.add('login-bust-inside');
    console.log(loginBust)
  } else {
    loginBust.classList.add('login-bust')     
    loginBust.classList.remove('login-bust-inside')  
  }
});

password.addEventListener('input', function(){
  if(!this.value == ''){
    loginPassword.classList.remove('login-padlock'); 
    loginPassword.classList.add('login-padlock-inside');  
  } else {
    loginPassword.classList.add('login-padlock'); 
    loginPassword.classList.remove('login-padlock-inside');   
  }
});
