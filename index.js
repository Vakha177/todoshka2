const toDoList  = [
    {
        text: "Прийти в интукод",   
        done: true ,
    }, 
    {
        text: "Пойти в столовку",    
        done: true ,
    }, 

    {
        text: "Пойти домой",    
        done: true,
    },
    {
        text: "Dota",    
        done: true  
    }, 
    {
        text: "Поспать",    
        done: true  
    }
]

const render = () => {
    const ulTodo = document.querySelector('#list')
    ulTodo.innerHTML = ''
    for (let i = 0; i < toDoList.length; i++) {
        const liToDo = document.createElement('li')
        liToDo.innerHTML = toDoList[i].text
        const chekbox = document.createElement('input')
        chekbox.type= 'checkbox'
        const button= document.createElement('button')
        liToDo.append(chekbox)
        liToDo.append(button)
        ulTodo.append(liToDo)
        button.textContent= 'x'
        button.addEventListener('click' , (e) => {
            e.target.parentElement.remove()
        })
    }
}
const remove = (index) => {
        toDoList.splice(index,1)
        render(toDoList)
}

const addTodo = (text) => {
    toDoList.push({text, bone: Boolean})
    render()
}



button.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('#input')
    addTodo(input.value)
    input.value=''
})

render()