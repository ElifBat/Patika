let list = document.querySelector("#list");
let addButton = document.getElementById('liveToastBtn');

addButton.addEventListener('click', addNewElement)

window.addEventListener("load", load)


function load() {
    let memory = JSON.parse(localStorage.getItem("task"));
    if (memory) {
        list.innerHTML = memory

        let listElemens = document.querySelectorAll(".list-item");
        addEvent(listElemens, markListItem);

        let closeButtons = document.querySelectorAll(".close");
        addEvent(closeButtons, removeListItem)

    }
}

function addEvent(items, callback, type = "click") {
    for (let index = 0; index < items.length; index++) {
        items[index].addEventListener(type, callback);
    }
}

function markListItem(event) {
    event.target.classList.toggle("checked");
    saveList(list);
}

function removeListItem(event) {
    event.target.parentElement.remove();
    saveList(list)
}

//add list element on page
function addNewElement(event) {
    let inputValue = task.value.trim();
    if (inputValue.length > 0) {
        let listItem = createListItem(inputValue);
        list.appendChild(listItem);
        task.value = "";
        $('#successToast').toast('show')
    }
    else {
        $('#errorToast').toast('show')
    }

    saveList(list);
}

function createListItem(inputValue) {
    let listElement = document.createElement("li");
    listElement.textContent = inputValue;
    listElement.classList.add("list-item");
    listElement.innerHTML += `<input class= "close btn" type="reset" value="X"></input>`
    listElement.addEventListener("click", markListItem);
    listElement.firstElementChild.addEventListener("click", removeListItem);
    return listElement;
}

//Save with Local Storage
function saveList(list) {
    localStorage.setItem("task", JSON.stringify(list.innerHTML));
}