let form =document.querySelector("form")
let select =document.querySelector("select")
let input =document.querySelector("input")
let image =document.querySelector("img")


const generateQR=async(e)=>{
    e.preventDefault();
    // console.log(input.value,select.value)
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`)
    // const data =await response.json();
// console.log(response.url)
image.setAttribute("src" ,response.url)
form.reset()
}



form.addEventListener("submit",generateQR)