let elSearch = document.querySelector("#search");
let elSearchBtn = document.querySelector(".search-btn");
let elReadyList = document.querySelector(".ready-list");
let elClearBtn = document.querySelector(".clear");
let elCheckBtn = document.querySelector("#check-btn");
let message = "Iltimos son kiritmang";

let groceryLists = [];
let marketsProducts = ["banana", "kiwi","lemon","peach"," pineaplle","apple","carrot","potato","tomato","cucumber","onio","raddish"];

elSearchBtn.addEventListener("click", function(evt){
  evt.preventDefault();

  let search = elSearch.value.trim();
  search = String(search);
  if (search == "" || search == Number(search) ) {
    elSearch.value = message;
    elSearch.style.color = "red";
    return
  }
    groceryLists.push(search);
    console.log(groceryLists);

  elSearch.style.color = "black";
  for (groceryList of groceryLists) {
    elReadyList.innerHTML = "";
    let newLi = document.createElement("li");
    newLi.textContent = groceryLists;
    elReadyList.append(newLi);
    newLi.style.color = "white";
  }
})

elClearBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  elReadyList.innerHTML = "";
})


elCheckBtn.addEventListener("click", function(evt) {
  evt.preventDefault();

  for (let product of marketsProducts) {
    if (search === product) {
      console.log(product);
      console.log(`${search} we have some kind products`);
    } 
  }
})