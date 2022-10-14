let formLogin = document.getElementById("form-login");
let user = document.getElementById("user");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
let loginBust = document.querySelector(".login-bust");
let loginPassword = document.querySelector(".login-padlock");
let inputUser = document.querySelector(".login-user");
let inputPassword = document.querySelector(".login-password");
let messageError = document.querySelector(".message-error")

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
    } else {
      messageError.style.display = "block"
      user.value = '';
      password.value = '';
      inputPassword.classList.remove('login-password-typing');
      user.classList.add('border-input')
      password.classList.add('border-input')
    }
})

user.addEventListener('input', function(){
  if(!this.value == ''){ 
    loginBust.classList.remove('login-bust');  
    user.classList.remove('border-input');   
    loginBust.classList.add('login-bust-inside');
    inputUser.classList.add('login-user-typing');
    
    messageError.style.display = "none"
  } else {
    loginBust.classList.add('login-bust')     
    loginBust.classList.remove('login-bust-inside') 
    inputUser.classList.remove('login-user-typing') 
  }
});

password.addEventListener('input', function(){
  if(!this.value == ''){
    loginPassword.classList.remove('login-padlock'); 
    password.classList.remove('border-input');
    loginPassword.classList.add('login-padlock-inside');  
    inputPassword.classList.add('login-password-typing');
    messageError.style.display = "none"
  } else {
    loginPassword.classList.add('login-padlock'); 
    loginPassword.classList.remove('login-padlock-inside'); 
    inputPassword.classList.remove('login-password-typing');  
  }
});
