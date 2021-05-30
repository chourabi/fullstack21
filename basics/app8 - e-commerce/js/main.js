var sideNavOpner = document.getElementById("side-nav-opner");
var sideNav = document.getElementById('side-nav');
var sideNavCloser = document.getElementById('side-nav-closer');
var siteContent = document.getElementById('site-content');
var productListHTML = document.getElementById('products-list');
var categoryFilter = document.getElementById('product-category-filter');

var keySearch = document.getElementById('key-search');
var priceSearch = document.getElementById('price-search');


priceSearch.addEventListener('change',()=>{
    search();
})


keySearch.addEventListener('keyup',()=>{
    console.log("test");
    search();
})

categoryFilter.addEventListener('change',()=>{
    search();
})

function search(){
    const keySearchValue = keySearch.value;
    const filterCategory = categoryFilter.value;
    const v = Number.parseInt(priceSearch.value);

    const max = maxPrice();
    var price = (v * max) / 100 ;


    // update filter-price-value
    document.getElementById('filter-price-value').innerHTML=price+'$';

 
var bloc ='';
 productList.map((p)=>{
     if( p.title.toLocaleLowerCase().indexOf(keySearchValue.trim().toLowerCase()) != -1 ){

        if (p.price <= price) {
            if (filterCategory == 'all') {
                bloc+='<div class="col-sm-12 col-md-3 mb-3">';
                bloc+='<div class="card" style="width: 100%;">';
                bloc+='<img src="'+p.imgURL+'" class="card-img-top" alt="...">';
                bloc+='<div class="card-body">';
                bloc+='<h5 class="card-title">'+p.title+'</h5>';
                bloc+='<p class="card-text">'+p.description+' <br> '+p.price+' $ </p>';
                bloc+='</div>';
                bloc+='</div>';
                bloc+='</div>';
                
            }else{
                if ( p.category == filterCategory ) {
                    bloc+='<div class="col-sm-12 col-md-3 mb-3">';
                    bloc+='<div class="card" style="width: 100%;">';
                    bloc+='<img src="'+p.imgURL+'" class="card-img-top" alt="...">';
                    bloc+='<div class="card-body">';
                    bloc+='<h5 class="card-title">'+p.title+'</h5>';
                    bloc+='<p class="card-text">'+p.description+' <br> '+p.price+' $ </p>';
                    bloc+='</div>';
                    bloc+='</div>';
                    bloc+='</div>';
                }
            }
        }
     }
 })

 productListHTML.innerHTML = bloc;

}



var productList = [
    { title:"Samsung tv 50", description:"super new product", price:1200 , category:"TV" , imgURL:"https://www.mega.tn/assets/uploads/img/pr_televiseurs/1599312648_921.jpg" },
    { title:"Telfunkin tv 49", description:"super new product", price:1000, category:"TV" , imgURL:"https://www.mega.tn/assets/uploads/img/pr_televiseurs/1599312648_921.jpg" },
    { title:"LG tv 32", description:"super new product", price:900 , category:"TV" , imgURL:"https://www.mega.tn/assets/uploads/img/pr_televiseurs/1599312648_921.jpg" },
    { title:"SONY tv 45", description:"super new product", price:560 , category:"TV" , imgURL:"https://www.mega.tn/assets/uploads/img/pr_televiseurs/1599312648_921.jpg" },
    { title:"Iphone 12", description:"super new phone", price:3000 , category:"SMARTPHONE" , imgURL:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1604021663000" },
    { title:"Samsung note 10", description:"super new phone", price:2700 , category:"SMARTPHONE" , imgURL:"https://www.samsungshop.tn/16810-thickbox_default/samsung-galaxy-note-20-ultra-tunisie.jpg" },
    
];



function initProducts(){

    var bloc='';

    productList.map((p)=>{
        bloc+='<div class="col-sm-12 col-md-3 mb-3">';
        bloc+='<div class="card" style="width: 100%;">';
        bloc+='<img src="'+p.imgURL+'" class="card-img-top" alt="...">';
        bloc+='<div class="card-body">';
        bloc+='<h5 class="card-title">'+p.title+'</h5>';
        bloc+='<p class="card-text">'+p.description+' <br> '+p.price+' $ </p>';
        bloc+='</div>';
        bloc+='</div>';
        bloc+='</div>';  
    })
    productListHTML.innerHTML = bloc;
}


sideNavOpner.addEventListener('click',(e)=>{
    e.preventDefault();
    sideNav.className ="side-nav side-nav-opned "; 
    siteContent.className = "site-content opened-side-content "
})

sideNavCloser.addEventListener('click',(e)=>{
    e.preventDefault();
    sideNav.className ="side-nav"; 
    siteContent.className = "site-content "
})



initProducts();


function maxPrice(){
    var max = 0;

    productList.map((p)=>{
        if (p.price >= max) {
            max = p.price;
        }
    })

    return max;
}