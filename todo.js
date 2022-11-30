let form = document.querySelector("form")
let input = document.querySelector("input")

form.addEventListener("submit", saveTodo)

function saveTodo(e){
    e.preventDefault()
    let li = document.createElement("li")
    li.innerText = input.value
    li.className = "list-group-item mt-2 border"
    let ul = document.querySelector("ul")
    ul.appendChild(li)
    form.reset()
    
}

saveTodo()