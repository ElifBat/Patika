//Add
const div = document.getElementById("add");
div.classList.add("fancy", "add", "addMetod");
const classNames = div.classList;

const pAdd = document.getElementById("pAdd")
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {
  div.classList.add("changedColor")
  document.getElementById("pAdd").innerHTML = "Class ekledikten sonra liste: " + classNames;

  pAdd.classList.toggle("changedColor")
})


//Remove

const pRemove = document.getElementById("pRemove")
const removeButton = document.getElementById("removeButton");

removeButton.addEventListener("click", function () {
  div.classList.remove("addMetod");
  document.getElementById("pRemove").innerHTML = "Class sildikten sonra liste: " + classNames;
})



//Item
const itemButton = document.getElementById("itemButton");
const pItem = document.getElementById("pItem")

itemButton.addEventListener("click", function () {
  div.classList.replace("add", "newClass");
  const firstClassName = div.classList.item(0);
  alert("İlk class: " + firstClassName);
})



//Contains
const containsButton = document.getElementById("containsButton");

containsButton.addEventListener("click", function () {
  
  const result = div.classList.contains("changedColor");
  const result2 = div.classList.contains("addMetod");


  alert(
    ` 
    'addMetod' class'ını içeriyor mu? --> " ${result2} 
    'changedColor' id'sinı içeriyor mu?  --> ${result}
    `)
})

//Replace

document.getElementById("pReplace").innerHTML = classNames;
const replaceButton = document.getElementById("replaceButton");
const pReplace = document.getElementById("pReplace")

replaceButton.addEventListener("click", function () {
  div.classList.replace("add", "newClass");
  document.getElementById("pReplace").innerHTML = "Class değiştikten sonra liste: " + classNames;
}
)



//Toggle
const pToggle = document.getElementById("pToggle")
const button = document.getElementById("toggleButton");

button.addEventListener("click", function () {
  pToggle.classList.toggle("colorp")
})

//Length
document.getElementById("length").innerHTML = "Class names length:" + " " + div.classList.length;


