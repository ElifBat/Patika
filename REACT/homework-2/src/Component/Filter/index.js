import { useState, useEffect } from 'react';
const buttonDOM = document.getElementsByClassName("filterButton");

function Filter({ list, filteredList, setFilteredList, deleteCompletedList }) {

    const onClick = (event) => {
        Object.values(buttonDOM).forEach((item) => item.classList.remove("selected"))
        event.target.classList.add("selected");
        allButton(event.target.id);
    }

    const allButton = (buttonId) => {
        if (buttonId == "all") {
            setFilteredList([...list])
        }
        else if (buttonId == "active") {
            const activeList = list.filter((item) => {
                if (item.done == false) {
                    return { item }
                }
            })
            setFilteredList(activeList)
        }
        else if (buttonId == "completed") {
            setFilteredList(completedList)
        }
        else if (buttonId == "clear-completed") {
            deleteCompletedList(completedList)
        }
    }

    const completedList = list.filter((item) => {
        if (item.done == true) {
            return { item }
        }
    })

    useEffect(() => allButton(), [list]);

    return <footer className={"footer"}>
        <div className={"filters"}>
            <button className={"todo-count"}><strong>{list.length}</strong> items left</button>
            <button id={"all"} className={"filterButton"} onClick={onClick}>All</button>
            <button id={"active"} className={"filterButton"} onClick={onClick} >Active</button>
            <button id={"completed"} className={"filterButton"} onClick={onClick}>Completed</button>
            <button id={"clear-completed"} className={"filterButton"} onClick={onClick}>Clear completed</button>
        </div>
    </footer>;
}

export default Filter;
