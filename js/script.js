// localStorage.setItem("first car","BMW")
// // console.log(localStorage.getItem("first car"))
// localStorage.getItem("first car")
// localStorage.setItem("stud1","karima")
// localStorage.setItem("stu2","ali")
// localStorage.removeItem("stud1")
// localStorage.clear()
// ////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////
let allproducts = document.querySelector(".products")
let products = [
    {
        id: 1,
        title: " SAMSUNG GALAXY",
        color: "grey",
        imageUrl: "image/1705498712406.jpeg"
    },
    {
        id: 2,
        title: " SAMSUNG GALAXY note",
        color: "blue",
        imageUrl: "image/1705498712298.jpeg"
    },
    {
        id: 3,
        title: " SAMSUNG GALAXY 20",
        color: "black",
        imageUrl: "image/1705498712426.jpeg"
    },
    {
        id: 4,
        title: " SAMSUNG GALAXY A34",
        color: "blue",
        imageUrl: "image/1705498712357.jpeg"
    }
]
function drawItems() {
    let y = products.map((item) => {
        return `
<div class="product_item">
<img class="product_item_img" src="${item.imageUrl}" alt="">
<div class="product_item_desc">
    <h2>${item.title}</h2>
    <p>the new device</p>
    <span>${item.color}</span>
</div>
<div class="product_item_action">
    <button class="add_to_cart" onClick="addToCart(${item.id})">add to cart</button>
    <i class="far fa-heart  fav"></i>
</div>
</div>
  `
    })
    allproducts.innerHTML = y;
}
drawItems()

let cartProductDiv = document.querySelector(".carts_products div")
let badge = document.querySelector(".badge")

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map(item => {
        cartProductDiv.innerHTML += `<p>${item.title}</p>`;
    })
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
}

if(localStorage.getItem=("username")){
        function addToCart(id){
            let choosenItem = products.find((item) => item.id === id );
            cartProductDiv.innerHTML += `<p>${choosenItem.title}</p>`;
            addedItem = [...addedItem , choosenItem]
            localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
            let cartProductsLengths = document.querySelectorAll(".carts_products div p")
            badge.style.display ="block";
            badge.innerHTML = cartProductsLengths.length;
        }
    }else {
        window.location ="login.html"
    }


// ///////////////////////////////////
let shoppingCartIcon = document.querySelector(".shopping_cart")
let cartProduct = document.querySelector(".carts_products")
shoppingCartIcon.addEventListener("click", opencart)
function opencart() {
    if (cartProductDiv.innerHTML != "") {
        if (cartProduct.style.display == "block") {
            cartProduct.style.display = "none"
        } else {
            cartProduct.style.display = "block"
        }
    }
}





// *******************************************************************
