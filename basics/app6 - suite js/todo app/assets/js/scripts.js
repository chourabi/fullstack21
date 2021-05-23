var listGlobal = document.getElementById("list-g");

var addBtn = document.getElementById("submit-btn")

var addForm = document.getElementById("add-form");

var todos = [];




function updateUI(){
    listGlobal.innerHTML ='';
    todos.map((todo)=>{
        var todoHTML = '<li onclick="confirmTodo('+todo.id+')" class="todo-item list-group-item';
        if (todo.status == true) {
            todoHTML+=' bg-success text-white';
        }

        todoHTML+='">'+todo.title+'<br/>'+todo.date+'</li>';
        listGlobal.innerHTML = listGlobal.innerHTML + todoHTML;
    })
}






var input = document.getElementById("todo-input");
input.addEventListener("keyup",(e)=>{
    const value = e.target.value;
    if (value != '') {
        // change btn state to ! disabled
        addBtn.removeAttribute('disabled');
    }else{
        addBtn.setAttribute("disabled","disabled")
    }
})


addForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    // recuperation de input
    var inputValue = document.getElementById("todo-input").value
    var addDate = new Date();

    // generate a new todo
    //old
    //var todo = '<li class="list-group-item">'+inputValue+'<br/>'+addDate+'</li>';
    //listGlobal.innerHTML = listGlobal.innerHTML + todo;
    todos.push(
        {
            id:todos.length,
            title:inputValue,
            date: addDate,
            status: false
        }
    )

    console.log(todos);

    updateUI();

    // empty input
    document.getElementById("todo-input").value = "";
    addBtn.setAttribute("disabled","disabled")
})


function confirmTodo(id){
    

    if (confirm("are you sure you want to cloture this todo ?")) {
        todos.map((todo)=>{
            if (todo.id == id) {
                todo.status = true;
            }
        })


        console.log(todos);
    
        updateUI();
    }
}


document.getElementById("reset-btn").addEventListener("click",()=>{
    todos = [];

    updateUI();
})