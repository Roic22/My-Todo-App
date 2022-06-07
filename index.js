//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.filter-todo');


   
    todoButton.addEventListener('click',addTodo);
    todoFilter.addEventListener('click',filterTodo);


//functions
function addTodo(event){
   event.preventDefault();
   const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const button1 = document.createElement('button');
    button1.innerHTML='<i class="fa fa-check"></i>';
    button1.classList.add("complete-btn");
    todoDiv.appendChild(button1);
    const button2 = document.createElement('button');
    button2.innerHTML='<i class="fa fa-trash"></i>';
    button2.classList.add("trash-btn");
    todoDiv.appendChild(button2);
    todoList.appendChild(todoDiv);
    todoInput.value = "";

    button1.addEventListener("click", (e)=>{
        todoDiv.classList.add("completed");
        
    });
    button2.addEventListener("click", (e)=>{
        todoDiv.classList.add("fall")
        
    });
   }


   function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }