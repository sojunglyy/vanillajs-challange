const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let todos = [];

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}


function deleteTodo(event) {
     const li = event.target.parentElement;
     li.remove();
     todos = todos.filter(todo => todo.id !== parseInt(li.id));
     saveTodo();
}


function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button  = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function handleSubmitForm(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}


todoForm.addEventListener("submit", handleSubmitForm);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}



