const todos=[];

window.onload = () =>{ //espera a que la pagina se cargue primero y luego el JS
    
    /*const parrafo = document.getElementById('texto')
    //parrafo.innerHTML = "Acabo de cambiar el texto"

    //Agregando elementos HTML a otro elemento HTML
    //debemos usar innerHTML y no innerText
    parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>'
    
    TODO ESTO YA FUE*/

    const form = document.getElementById('Todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo')
        const todotext = todo.value;
        todo.value = '';
        todos.push(todotext);
        
        const todoList = document.getElementById("todo-list");
        /*todoList.innerHTML = '';
        for(let i = 0; i < todos.length; i++){
            todoList.innerHTML += '<li>' + todos[i] + '</li>';
        }*/

        //LO HAREMAS MAS OPYIMO USANDO MAP
       /* const todosTemplate = todos.map(t => '<li>' + t + '</li>');
        todoList.innerHTML = todosTemplate.join('');
        */
        //QuerySelectorAll
        /*todoList = document.querySelectorAll('#todo-list');
        console.log(Array.from(todoList));
        const elementos = document.querySelectorAll('#todo-list li');
        console.log(Array.from(elementos));
        elementos.forEach(x => console.log(x))
        */

        //Inspeccionar elementos
        const todosTemplate = todos.map(t => '<li>' + t + '</li>');
        todoList.innerHTML = todosTemplate.join('');
        const elementos = document.querySelectorAll('#todo-list li');
        elementos.forEach((elemento, i) => {
            elemento.addEventListener('click',() =>{
                //parentNode permite manupular las eitquetas del orden que les sigue
                elemento.parentNode.removeChild(elemento) 
                todos.splice(i,1);
            })
        })
    }
}
/*
//uso de splice
const arr = [1,2,3,4,5]
arr.splice(2, 1)//borra un elemente en la posicion 3° posicion y borra los numeros cosiguiente apartir de la posicion
*/
