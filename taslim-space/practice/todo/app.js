let name = document.getElementById('name');
let btn = document.getElementById('btn');
let list = document.getElementById('list');

// Alerts
let succesAlert = document.getElementById('success-alert');
let errorAlert = document.getElementById('error-alert');
let warnAlert = document.getElementById('warn-alert');

// Add Data
btn.addEventListener('click', ()=>{
    // Blank Todos
    let todo = [];

    // Create
    if(name.value !== ''){
        succesAlert.style.display = "block";

        setTimeout(() => {
            succesAlert.style.display = "none";
        }, 3000);

        todo.push(name.value);
    }else{
        warnAlert.style.display = "block";

        setTimeout(() => {
            warnAlert.style.display = "none";
        }, 3000);
    }

    // Read
    for(let i in todo){
        list.innerHTML +=`
            <li class='my-3 gap-3 align-items-center'><span class='todo-data'>${todo[i]} </span><button type='text' class='delete btn btn-danger'><i class='fa fa-trash'></i></button></li>
        `;

        // Update
        let todoData = document.querySelectorAll('.todo-data');
        todoData.forEach(todos => {
            todos.addEventListener("dblclick", ()=>{
                alert("Now You can Edit");
                todos.contentEditable = true;
            })
        });
        
        // Delete
        let deleteBtn = document.querySelectorAll('.delete');
        deleteBtn.forEach(del => {
            del.addEventListener("click", ()=>{
                errorAlert.style.display = "block";

                setTimeout(() => {
                    errorAlert.style.display = "none";
                }, 3000);
                del.parentElement.style.display = "none";
            })
        });
    }
})