console.log("let's go todo !")

// créer un évenement formulaire
// récupére la value de l'input text
// Stocké la valeur dans un const global
// créer un template de la todo
// itéré sur la const global pour afficher les donnéer

const formToDo = document.querySelector('#formToDo')
const container = document.querySelector('#container')
let index = 0;

const todos = []
formToDo.addEventListener('submit', (event) => {
  event.preventDefault()
  if(event.target[0].value === '') return
  const todo = {
    title: event.target[0].value,
    done: false,
  }
  console.log(event)
  event.target[0].value = ''
  todos.push(todo)
  console.log(todos)
  displayTodos(todos)
})

const cardTodo = (todo) => {
  return `
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="d-flex align-items-center">
        <input type="checkbox" class="form-check-input" ${todo.done ? 'checked' : ''}>
        <label class="form-check-label ps-2">${todo.title}</label>
      </div>
      <button data-title=${todo.title} class="btn btn-danger" type="button">Remove</button>
    </div>
  `
}

const displayTodos = (todos) => {
  container.innerHTML = ''
  todos.forEach((todo) => {
    container.insertAdjacentHTML('afterbegin', cardTodo(todo))
    const btn = document.querySelector('.btn-danger')
    btn.addEventListener('click', (event) => {
      console.log(event)
      deletedTodo(event.target.dataset.title)
      displayTodos(todos)
    })
  })
}

const deletedTodo = (title) => {
  console.log(title)
  todos.forEach((todo, index) => {
    if(todo.title === title) {
      console.log(index)
      todos.splice(index, 1);
      return
    } 
  })
}