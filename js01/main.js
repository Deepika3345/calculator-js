// let heading = document.querySelector(".first-heading");
// heading.style.color = "green";
// heading.style.backgroundColor="yellow";

// let para = document.querySelector(".paragraph");
// para.style.color ="Blue";
// para.backgroundColor="green";
// para.fontSize="50px";

// let paragraph =document.querySelectorAll(".paragraph");

// paragraph.style.fontSize ="25px";
// paragraph.style.backgroundColor="blue";
// paragraph.style.color="blue";

// let First = document.querySelector("#heading");
// First.style.backgroundColor="green";

// let secondhead = document.querySelector(".Second_heading");
// secondhead.style.color="pink";

// let heading = document.getElementById("heading");
// heading.style.backgroundColor="blue"
// heading.style.color="yellow"



// let paragraph = document.getElementsByClassName("paragraph");

//  for(let i=0; i<paragraph.length; i++){
//     paragraph[i].style.color="blue"

//  }
// console.log(paragraph)

// let headings = document.getElementsByTagName("p");

// for(let i=0; i< headings.length ;i++){
//     headings[i].style.color="green"
//     headings[i].style.backgroundColor="yellow"
//     headings[i].style.textTransform="uppercase"
// }
// console.log(headings)



// let headings = document.getElementById("heading");
// headings.style.color="red"
//  console.log(headings);


// function main()

// {
//   alert("Good job");
// }


// let headings = document.getElementsByClassName("paragraph")
//  for (let i=0; i<headings.length ; i++){
//  headings[0].style.color="blue"
//  headings[0].style.backgroundColor="YELLOW"

//  headings[2].style.fontSize="20px"

//  }
// console.log(headings)


// let headings = document.getElementsByTagName("h1")
// for (let i=0; i<headings.length ; i++)
// {
//     headings[i].style.color="pink"
// }

// let headings = document.querySelectorAll(".paragraph")

// for (let i=0; i<headings.length ; i++)
// {
//     headings[i].style.color="pink"
// }


// let ul = document.querySelector("ul")
// console.log(ul.children)
// console.log(ul.nextSibling)
// console.log(ul.previousElementSibling)
// console.log(ul.nextElementSibling)
// console.log(ul.nextSibling)

// for (let i = 0; i < ul.children.length; i++) {
//     ul.children[2].style.color = "blue"
//     ul.children[3].style.backgroundColor="pink"
//     ul.children[i].style.listStyle = "none"

// }


let body = document.querySelector("body")
let Lightbtn = document.querySelector(".light-btn")
Lightbtn.addEventListener("click",() => {
   body.style.backgroundColor="white"
   body.style.color="black"
})

let Darkbtn = document.querySelector(".dark-btn")
Darkbtn.addEventListener("click",() => {
    body.style.backgroundColor="black"
   body.style.color="white"

})


const dishes = [
    {
        "name": "Chicken Biryani",
        "price": 12.99,
        "stock": 25,
        "isVeg": false,
        "origin": "India"
    },
    {
        "name": "Margherita Pizza",
        "price": 9.99,
        "stock": 15,
        "isVeg": true,
        "origin": "Italy"
    },
    {
        "name": "Pad Thai",
        "price": 8.49,
        "stock": 20,
        "isVeg": false,
        "origin": "Thailand"
    },
    {
        "name": "Sushi",
        "price": 18.75,
        "stock": 30,
        "isVeg": false,
        "origin": "Japan"
    },
    {
        "name": "Taco",
        "price": 3.99,
        "stock": 40,
        "isVeg": false,
        "origin": "Mexico"
    },
    {
        "name": "Hamburger",
        "price": 5.49,
        "stock": 35,
        "isVeg": false,
        "origin": "Germany"
    },
    {
        "name": "Pasta Carbonara",
        "price": 10.99,
        "stock": 18,
        "isVeg": false,
        "origin": "Italy"
    },
    {
        "name": "Falafel Wrap",
        "price": 6.25,
        "stock": 22,
        "isVeg": true,
        "origin": "Middle East"
    },
    {
        "name": "Samosa",
        "price": 1.99,
        "stock": 50,
        "isVeg": true,
        "origin": "India"
    },
    {
        "name": "Pho",
        "price": 9.25,
        "stock": 28,
        "isVeg": false,
        "origin": "Vietnam"
    },
    {
        "name": "Caesar Salad",
        "price": 7.49,
        "stock": 32,
        "isVeg": true,
        "origin": "Mexico"
    },
    {
        "name": "Ramen",
        "price": 11.99,
        "stock": 24,
        "isVeg": false,
        "origin": "Japan"
    },
    {
        "name": "Gyro",
        "price": 8.99,
        "stock": 20,
        "isVeg": false,
        "origin": "Greece"
    },
    {
        "name": "Chicken Tikka Masala",
        "price": 13.49,
        "stock": 18,
        "isVeg": false,
        "origin": "India"
    },
    {
        "name": "Veggie Burger",
        "price": 6.99,
        "stock": 28,
        "isVeg": true,
        "origin": "United States"
    },
    {
        "name": "Ceviche",
        "price": 10.75,
        "stock": 15,
        "isVeg": false,
        "origin": "Peru"
    },
    {
        "name": "Miso Soup",
        "price": 3.99,
        "stock": 40,
        "isVeg": true,
        "origin": "Japan"
    },
    {
        "name": "Chicken Shawarma",
        "price": 8.49,
        "stock": 30,
        "isVeg": false,
        "origin": "Middle East"
    },
    {
        "name": "Egg Fried Rice",
        "price": 7.25,
        "stock": 25,
        "isVeg": false,
        "origin": "China"
    },
    {
        "name": "Caprese Salad",
        "price": 9.99,
        "stock": 20,
        "isVeg": true,
        "origin": "Italy"
    },
    {
        "name": "Fish and Chips",
        "price": 10.49,
        "stock": 18,
        "isVeg": false,
        "origin": "United Kingdom"
    },
    {
        "name": "Hummus",
        "price": 4.49,
        "stock": 35,
        "isVeg": true,
        "origin": "Middle East"
    },
    {
        "name": "Lasagna",
        "price": 11.99,
        "stock": 22,
        "isVeg": false,
        "origin": "Italy"
    },
    {
        "name": "Philly Cheesesteak",
        "price": 8.75,
        "stock": 28,
        "isVeg": false,
        "origin": "United States"
    },
    {
        "name": "Tom Yum Goong",
        "price": 9.25,
        "stock": 24,
        "isVeg": false,
        "origin": "Thailand"
    },
    {
        "name": "Avocado Toast",
        "price": 6.99,
        "stock": 30,
        "isVeg": true,
        "origin": "United States"
    }
]


// 1. *forEach:*
// - Print the names of all the food items.

// dishes.forEach((dish) =>{
// console.log(dish.name);
// })

// - Update the stock of each food item to be decreased by 5.

// dishes.forEach((dish)=>{
//     console.log(dish.price-5)
// })
// console.log(first)


// 2. *map:*
// - Create an array of food item names.

// const arrayitems = dishes.map((dish) =>{
//     return dish.name
// });
// console.log(arrayitems);


// - Create an array containing the prices of all food items.

// const pricearray =dishes.map((dish)=>{
//     return dish.price
// })
// console.log(pricearray)

// 3. *sort:*
// - Sort the food items by price in ascending order.

// const sortarray = dishes.sort((a,b)=>{
//     if(a.price<b.price){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// })
// console.log(sortarray)



// - Sort the food items by name in alphabetical order.

//  const sortArray = dishes.sort((a,b)=>{
//     if (a.name > b.name){
//         return 1
//     }
//     else{
//         return -1
//     }
//  })
//  console.log(sortArray)



// 4. *filter:*
// - Create an array of vegetarian food items.

// const vegarray = dishes.filter((dish) => {
//     if (dish.isVeg === true) {
//         return true
//     }
// })
// console.log(vegarray)

// - Create an array of food items that have a price less than $10.


// - Create an array of food items that originate from Italy.

// const italyarray = dishes.filter((dish)=>{
//     if (dish.origin==="Italy"){
//         return true
//     }
// })
// console.log(italyarray)


// 5. *forEach and map:*
// - Using `.forEach`, print the names of vegetarian food items.



// - Using `.map`, create an array of objects with food item names and their prices.

// 6. *map and sort:*
// - Use `.map` to create an array of objects with food item names and their lengths.
// - Sort the food items by name length using the `.sort` method.

// 7. *filter and map:*
// - Filter the food items to only include those with prices greater than $8, and then create an array of their names using `.map`.

// 8. *forEach, filter, and sort:*
// - Print the names of food items that have a price between $5 and $10, sorted alphabetically.

// 9. *map and filter:*
// - Create an array of objects with food item names and whether they are vegetarian or not, using `.map`.
// - Filter this array to include only vegetarian food items.

// 10. *forEach and filter:*
//  - Print the names of food items that have a stock of less than 20, using `.forEach`.

// 11. *map, sort, and filter:*
//  - Create an array of food items' names and prices, and then sort it by price in descending order.

// 12. *map, filter, and sort:*
//  - Create an array of vegetarian food items' names, and then sort it alphabetically.

// 13. *map, filter, and forEach:*
//  - Create an array of food items' names and their origins, and then print each element using `.forEach`.

// 14. *map, sort, and forEach:*
//  - Create an array of food items' names and prices, sort it by price in ascending order, and then print each element using `.forEach`.

// 15. *filter, sort, and map:*
//  - Filter out food items with stock less than 10, sort them by price in ascending order, and create an array of their names using `.map`.

// 16. *forEach and sort:*
//  - Print the names of food items, sorted by name length using the `.sort` method.

// 17. *filter and forEach:*
//  - Print the names and origins of vegetarian food items using `.filter` and `.forEach`.

// 18. *sort, map, and filter:*
//  - Sort the food items by price in descending order, create an array of their names, and then filter out those with a price greater than $10.

// 19. *filter, map, and sort:*
//  - Filter the food items to include only those from Italy, create an array of their names, and then sort it alphabetically.

// 20. *forEach, filter, and map:*
//  - Print the names and prices of food items that are not vegetarian, but have a price less than $10, using `.forEach`, `.filter`, and `.map`.
