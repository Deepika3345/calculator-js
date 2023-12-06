let body = document.querySelector("body")
let container = document.querySelector(".container")
let form = document.querySelector("form")
// let input = document.querySelector("input")

let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")

// let card = document.querySelector(".card")
let button = document.querySelector("button")
let ul = document.querySelector("ul")
const saveDetail = (e) => {
    e.preventDefault();
    let li = document.createElement("li")
    let name = document.createElement("p")
    name.innerText = one.value
    li.appendChild(name)
    li.className = "list-group-item rounded-0 ";


    let relation = document.createElement("p")
    relation.innerText = three.value
    li.appendChild(relation)


    if (one.value.length == 0 || two.value.length == 0) {
        window.confirm("please fill the info..")
        exit;
    }

    let p = document.createElement("p")
    for (let i = 0; i < two.value.length; i++) {
        if (two.value.charAt(i) < '0'
            || two.value.charAt(i) > '9') {
            window.confirm("Check the no.?")
            exit;
        }
        else {
            p.innerText = two.value;
        }
    }
    li.appendChild(p)
    ul.appendChild(li)


    let callbtn = document.createElement("button")
    let a = document.createElement("a")
    a.href = "tel:" + two.value
    a.innerText = "Call"
    a.style.color = "white"
    a.style.textDecoration = "none"
    callbtn.className = "btn btn-primary btn-lg rounded-0 "
    callbtn.appendChild(a)
    li.appendChild(callbtn)
    let dltbtn = document.createElement("button")
    dltbtn.innerText = "Delete"
    dltbtn.className = "btn btn-danger btn-lg rounded-0 m-2 "
    li.appendChild(dltbtn)
    ul.appendChild(li);
    form.reset();
}
form.addEventListener("submit", saveDetail)


const deleteItem = (e) => {
    if (e.target.className.includes("btn-danger")) {
        let li = e.target.parentElement;
        ul.removeChild(li)
    }

}

ul.addEventListener("click", deleteItem)









