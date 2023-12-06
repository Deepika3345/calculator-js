let form = document.querySelector("form")
let ul = document.querySelector('ul')
let input = document.querySelector("input")
let button = document.querySelector("button")


const saveTodo = (e) => {
    e.preventDefault()
    let li = document.createElement("li")
    li.innerText = input.value
    li.className = "list-group-item"
    ul.appendChild(li)

    let delBtn = document.createElement("button")
    delBtn.className = "btn btn-danger float-end"
    delBtn.innerText = "Delete"
    li.appendChild(delBtn)
    form.reset()
}

form.addEventListener("submit", saveTodo)




const deletTodo = (e) => {
    if (e.target.className.includes("btn-danger")) {
        let li = e.target.parentElement;
        if (window.confirm("Are you sure")) {
            ul.removeChild(li)
        }
    }
}

ul.addEventListener("click", deletTodo)