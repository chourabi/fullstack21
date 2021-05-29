const token = localStorage.getItem('token');

if (token == null) {
    window.location ="login.html";

    // resrtict access
}

/*
document.getElementById('logOutBtn').addEventListener("click",()=>{
    if (confirm('do you really want to log out ?')) {
        localStorage.removeItem('token');
        window.location ="login.html";
    }
})*/


var productListArray = [];


function updateUi(){
    var blocToAdd = '';

    productListArray.map((p)=>{
        blocToAdd+=' <tr><th scope="row">'+(productListArray.length +1)+'</th><td>'+p.title.trim()+'</td><td>'+p.code.trim()+'</td><td>'+p.quantity.trim()+'</td><td>'+p.price.trim()+'</td><tdtest</td></tr> ';
    })

    document.getElementById('list-body').innerHTML = blocToAdd;
}


var addBtn = document.getElementById('add-btn-top');
var cancelAdd =document.getElementById('cancel-add'); 
var blocAdd = document.getElementById('add-product-form');
var listProduit= document.getElementById('products-view');
var addProductForm = document.getElementById('add-product-form');

/* point on inputs */
var title = document.getElementById('title');
var code = document.getElementById('code');
var quantity = document.getElementById('quantity');
var price = document.getElementById('price');




addBtn.addEventListener("click",()=>{
    blocAdd.style.display = "block";
    listProduit.style.display = "none";
})

cancelAdd.addEventListener("click",()=>{
    listProduit.style.display = "block";
    blocAdd.style.display = "none";
})

addProductForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    var p = {
        title:title.value,
        quantity:quantity.value,
        code:code.value,
        price:price.value,
        
    }

    productListArray.push(p);
    updateUi();
    listProduit.style.display = "block";
    blocAdd.style.display = "none";



})