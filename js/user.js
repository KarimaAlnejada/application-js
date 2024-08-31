let userinfo = document.querySelector("#user-info")
let userdata = document.querySelector("#user")
let links = document.querySelector("#links")

if (localStorage.getItem("username")) {
    links.remove()
    userinfo.style.display = "flex"
    userdata.innerHTML = localStorage.getItem("username")// يكتب في الهيد اسم المستخدم الذي تم ادخاله في اليوزر
}

let logOutBtn = document.querySelector("#log_out")
logOutBtn.addEventListener("click", function () {
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    }, 1500)
})