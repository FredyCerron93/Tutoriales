const todos = JSON.parse(localStorage.getItem('todos')) || [];

const render = () => {
    const todoList = document.getElementById("todo-list");       
    const todosTemplate = todos.map(t => '<li>' + t + '</li>');
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click',() =>{
            //parentNode permite manupular las eitquetas del orden que les sigue
            elemento.parentNode.removeChild(elemento) ;
            todos.splice(i,1);
            actulizarTodos(todos);
            //aplicamos recursividad para que actualice la vista en el navegador y tambien para actulizar los indices cuando se elimina un elemento 
            render();
        })
    })
}

const actulizarTodos = (todos) =>{
    //Transformar el contenido del arreglo en strings
    const todoStrings = JSON.stringify(todos) 
    localStorage.setItem('todos', todoStrings)
}

window.onload = () =>{ //espera a que la pagina se cargue primero y luego el JS
    render()
    const form = document.getElementById('Todo-form');////aplicamos recursividad cuando eliminamos algunos de los elementos
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo')
        const todotext = todo.value;
        todo.value = '';
        todos.push(todotext);
        actulizarTodos(todos);
        render();        
    }
}
 
