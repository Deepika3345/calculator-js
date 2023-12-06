const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const tag= document.querySelector(".badge");

const getQuote= async ()=>{
const response = await fetch("https://quotable.io/random")
const data = await response.json()

  

    h1.innerText =data.content;
    h2.innerText=data.author;
    tag.innerText=data.tag[0]

}



button.addEventListener("click",getQuote)


