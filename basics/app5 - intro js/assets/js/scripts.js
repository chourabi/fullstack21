/*console.log("js is ready");

//document.getElementById("title").innerHTML = "somme de a + b = "+ ( somme);

var i = 1.6;

var istr = "1"

var bool = true;

var nan = NaN;

var array = [];

var array2 = Array();

var array3 = [1,2,3,"hello world",true]

var employee = { "nom":"taher", "prenom":"chourabi" }*/ // json
/*
var today = new Date();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();


//document.getElementById("date").innerHTML = date+" / "+month+" / "+year;


var myFunc = function updateUIDate(){
    document.getElementById("date").innerHTML = date+" / "+month+" / "+year;
}


myFunc();

*/

/*

function somme(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    // calcul de somme
    document.getElementById("result").innerHTML = (Number.parseInt(a)+Number.parseInt(b))
     
}*/


/*
var formations = [
    {
        title:"formation js",
        description:"2 weeks minimum",
       
    },
]


var listDOM = document.getElementById("list");


formations.map( (elment)=>{
    var htmlELEMENT = '<li><h3>'+elment.title+'</h3><p>'+elment.description+'</p></li>';

    listDOM.innerHTML = listDOM.innerHTML + htmlELEMENT;
} );*/

/********************* moy app**************************
var matiers = [
    {
        coef:3,
        note:18,
        name:"Math"
    },
    {
        coef:3,
        note:16,
        name:"POO"
    },
    {
        coef:1.5,
        note:16,
        name:"C#"
    },

]

function sommeCoef(){
    var total = 0;
    matiers.map((m)=>{
        total+= m.coef;
    })
    return total;
}

function sommeNotes(){
    var total = 0;
    matiers.map((m)=>{
        total+= (m.note * m.coef);
    })
    return total;
}

// calcul moy
var moy = sommeNotes() / sommeCoef();

console.log(moy);


// result
if ( moy < 10 ) {
    console.log("redoublant");
}else if( moy >= 10 ){
    console.log("admis");
}

// mention

switch (moy) {
    case 16.8:
        console.log("excel");
    break;


    default:
        console.log("passable");
        break;
}*/


/******************
var age;
var attemps = 0;
while (attemps < 3) {
    attemps++;
    

    if (!  isNaN( Number.parseInt(res) ) ) {
        attemps = 5;
        age = Number.parseInt(res) ;
    }else{
        var res = prompt("you age please");
    }
    
}

if (age != null) {
    if (age > 18 ) {
        console.log("you can have access");
    }else{
        console.log("you can't have access");
    }
}else{
    console.log(":(");
}
*/




var btn = document.getElementById("btn");



var likes = 0;
btn.innerHTML = "likes "+likes


btn.addEventListener("click", function(){
    likes++;

   this.innerHTML = "likes "+likes
    console.log("clicked");
})
