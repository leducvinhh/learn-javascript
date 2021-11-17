function createTodo(todo) {
    if (!todo) return null

    const template = document.getElementById('todoTemplate')
    if (!template) return null

    const liElement = template.content.firstElementChild.cloneNode(true)
    liElement.dataset.id = todo.id
    liElement.dataset.state = todo.state

    if (liElement) {
        const pElement = liElement.querySelector('.title')
        pElement.textContent = todo.title
    }

    const divElement = liElement.querySelector('.todo')
    divElement.classList.add(liElement.dataset.state === 'completed' ? 'active' : 'default')

    // attach event for button
    const successBtn = liElement.querySelector('.btn-success')
    if (successBtn) {
        successBtn.textContent = liElement.dataset.state === 'pending' ? 'Finish' : 'Reset'

        successBtn.addEventListener('click', function () {
            const currentStatus = liElement.dataset.state
            const newState = currentStatus === 'pending' ? 'completed' : 'pending'

            // get todoList and change state
            const todoList = getTodoList()
            const index = todoList.findIndex(x => x.id === todo.id)
            if (index >= 0) {
                todoList[index].state = newState

                localStorage.setItem('todo-list', JSON.stringify(todoList))
            }

            // change state and set class by state
            liElement.dataset.state = newState

            let currentClass = currentStatus === 'pending' ? 'active' : 'default'
            divElement.classList.remove('active', 'default')
            divElement.classList.add(currentClass)

            this.textContent = liElement.dataset.state === 'pending' ? 'Finish' : 'Reset'
        })
    }

    const removeBtn = liElement.querySelector('.btn-remove')
    if (removeBtn) {
        removeBtn.addEventListener('click', function () {
            const todoList = getTodoList()

            const newTodoList = todoList.filter((x) => {
                return x.id !== todo.id
            })

            localStorage.setItem('todo-list', JSON.stringify(newTodoList))

            liElement.remove()
        })
    }

    return liElement
}

function render(todoList, elementId) {
    if (!Array.isArray(todoList) || todoList.length === 0) return

    const ulElement = document.getElementById(elementId)
    if (!ulElement) return null

    todoList.forEach(function (todo) {
        const li = createTodo(todo)

        ulElement.appendChild(li)
    })
}

function getTodoList() {
    try {
        return JSON.parse(localStorage.getItem('todo-list')) || []
    } catch (error) {
        return []
    }
}

function handleFormSubmit(e) {
    e.preventDefault()
    const todoInput = document.querySelector('#todo-name')
    if (!todoInput) return

    const newTodo = {
        id: Date.now(),
        title: todoInput.value,
        state: 'pending'
    }

    if (todoInput.value.trim().length > 0) {
        const todoList = getTodoList()
        todoList.push(newTodo)
        localStorage.setItem('todo-list', JSON.stringify(todoList))

        const liElement = createTodo(newTodo)

        const ulElement = document.getElementById('todo-list')
        if (!ulElement) return null

        ulElement.appendChild(liElement)

        const formEl = document.getElementById('form-todo')
        if (formEl) {
            formEl.reset()
        }
    }
}

function start() {
    const todoList = getTodoList()
    render(todoList, 'todo-list')

    const formElement = document.getElementById('form-todo')
    if (formElement) {
        formElement.addEventListener('submit', handleFormSubmit)
    }
}

document.addEventListener('DOMContentLoaded', start)