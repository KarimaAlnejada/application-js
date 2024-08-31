let username=document.querySelector("#username")
let password=document.querySelector("#password")
let loginBtn =document.querySelector("#sign_in")

let getUsername = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")

loginBtn.addEventListener("click", function(k){
    k.preventDefault()
    if(username.value=== "" || password.value===""){
        alert("please fill data")
    }else{
        if(getUsername && getUsername.trim() === username.value.trim() &&
         getpassword && getpassword.trim() === password.value.trim()){

         setTimeout( () =>{
            window.location="index.html"    //ينقل الى صفحة ال index
            },1500)}
            else{
                alert(" the username or password not true")
            }
    }
})