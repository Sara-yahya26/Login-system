userMail=document.getElementById("userMail")
userPassword=document.getElementById("userPassword")
message=document.getElementById("message")
var users=[]
users=JSON.parse(localStorage.getItem("users"))
function Validation(input)
{  
  
  var Regex  = {
   userMail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
   userPassword: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

  }
 
    if(Regex[input.id].test(input.value) )
   {
      input.classList.add('is-valid')
      input.classList.remove('is-invalid')
      input.nextElementSibling.classList.replace('d-block','d-none') 
      return true   
   }
   else{
    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
    input.nextElementSibling.classList.replace('d-none','d-block')
    return false
   }
  
}

function logIn(){
      if (Validation(userMail)&& Validation(userPassword)){
    
    var emailExist=false;
    for(var i=0; i<users.length;i++){
        if( users[i].userMail==userMail.value)
{
        emailExist==true
}

}

if(emailExist){
    message.textContent("this email is already registered")
}
else{
        localStorage.setItem("users", JSON.stringify(users))

            window.location.href="welcome.html";

}}
    else{
        message.textContent = "Invalid username or password.";
    }
}

function logOut(){
    
    window.location.href="index.html"
        clearInput()

}

function clearInput(){
    userMail.value=null,
    userPassword.value=null
}
