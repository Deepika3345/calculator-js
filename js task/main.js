let container = document.querySelector(".container");

container.style.height = "100vh";
container.style.padding = "10px"


let darkbutton = document.createElement("button")
darkbutton .innerText = " Dark Mode"
darkbutton.style.backgroundColor = " black"
darkbutton.style.color = "white"
darkbutton.style.height = " 60px"
darkbutton.style.width = "49%"
darkbutton.style.border = "none"
darkbutton.style.borderRadius = "50px"



container.appendChild(darkbutton);



let lightbutton = document.createElement("button")
lightbutton.innerText = " Light Mode"
lightbutton.style.backgroundColor = "white"
lightbutton.style.color = "black"
lightbutton.style.height = " 60px"
lightbutton.style.width = "50%"
lightbutton.style.marginLeft = "2px"
lightbutton.style.border = "1px solid gray"
lightbutton.style.borderRadius = "50px"

container.appendChild(lightbutton)

let newparagraph = document.createElement("p")
newparagraph.innerText = " Task Completed by Deepika Patidar"
newparagraph.style.color = " black"
newparagraph.style.fontSize = "35px"
newparagraph.style.textAlign = "center"
container.appendChild(newparagraph)

function darkmode() {
    container.style.backgroundColor = "black"
    newparagraph.style.color = "white"
    darkbutton.style.backgroundColor = "white"
    darkbutton.style.color = "black"
    lightbutton.style.backgroundColor = "black"
    lightbutton.style.color = "white"
   
}
darkbutton.addEventListener("click", darkmode)



function lightmode() {
    container.style.backgroundColor = "white"
    newparagraph.style.color = "black"
    darkbutton.style.border = "2px solid gray"

}
lightbutton.addEventListener("click", lightmode)

// function clickfun() {
//     button.style.backgroundColor="blue"
//     button.style.color="white"
//     button.style.border="none"
//     button.style.height="40px"
//     button.style.width="100px"

// }
// button.addEventListener("click",clickfun )