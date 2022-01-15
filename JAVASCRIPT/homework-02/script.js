let ulDOM = document.querySelector("#list");
let listItemDOM = document.querySelectorAll(".list-item");
let closeDOM = document.querySelectorAll(".close");
let addButton = document.getElementById('liveToastBtn');

addButton.addEventListener('click', addNewElement)

function createListItem(inputValue) {
    let listElement = document.createElement("li");
    listElement.textContent = inputValue;
    listElement.classList.add("list-item");
    listElement.innerHTML = `${listElement.innerHTML} <input class= " close btn" type= "reset" value="X"></input>`
    listElement.addEventListener("click", listItemClickHandler);
    listElement.firstElementChild.addEventListener("click", removeListItem);
    return listElement;
}

function addNewElement(event) {
    let inputValue = task.value.trim();
    if(inputValue.length > 0){
        let listItem = createListItem(inputValue);
        ulDOM.appendChild(listItem);
        task.value = "";
        $('#liveToast1').toast('show') 
   }
    else{
        $('#liveToast').toast('show')  
    }
}

for (let index = 0; index < listItemDOM.length; index++) {
    listItemDOM[index].addEventListener("click", listItemClickHandler);
}

function listItemClickHandler(event) {
    event.target.classList.toggle("checked");
}

for (let index = 0; index < closeDOM.length; index++) {
    closeDOM[index].addEventListener("click", removeListItem);
}

function removeListItem(event) {
    event.target.parentElement.remove();
}