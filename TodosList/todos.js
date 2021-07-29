const form = document.getElementById('form');
const input= document.getElementById('input');
const todosUL= document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'))
if(todos){
    todos.forEach(todo =>addTodo(todo))
}
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    addTodo()  

})

function addTodo(todo){
    let todoText = input.value 
    //console.log(todoText)
    if(todo){
        todoText=todo.text
    }
    //console.log(todoText)

    if(todoText){
        const todoEl =document.createElement('li');
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }
        todoEl.innerText=todoText;
        todoEl.addEventListener('click', ()=>{
            todoEl.classList.toggle('completed')// left click to toggle between completed and todo(incompleted)
            updateLS()
    
    }) 
        
        todoEl.addEventListener('contextmenu', (e) => { //contextmenu for rightclick
            e.preventDefault() // it prevent from displaying default options that appear on right click
            todoEl.remove()
            updateLS()


        })


        todosUL.appendChild(todoEl)
        input.value = '';
        
        updateLS()

    }

}
function updateLS(){
    todosEl = document.querySelectorAll('li');
    const todos = []
    todosEl.forEach(todoEl => {
        todos.push({
            text:todoEl.innerText,
            completed:todoEl.classList.contains('completed')

        })
    })
    localStorage.setItem('todos',JSON.stringify(todos))

}

//localStorage.setItem('name','brad') 
//in localstorage items are saved as string if we want to save an array or an object then we have to use stringfy() method of JSON which will stringy our object or an array
//  localStorage.setItem('name',JSON.stringify(obj))
//  to get item from localStorage
//  JSON.parse(localStorage.getItem(obj)) 
// to remove item: 
//localStorage.removeItem();
