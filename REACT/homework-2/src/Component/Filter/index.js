import { useState } from 'react';
const buttonDOM = document.getElementsByClassName("filterButton")

function Filter({ list }) {
    const [filteredList, setFilteredList] = useState("all");
    

    const onClick = (event) => {
        Object.values(buttonDOM).map((item) => item.classList.remove("selected"))
        event.target.classList.toggle("selected");

        if (event.target.id == "all") {
            allButton();
        }

        if (event.target.id == "active") {
            activeButton();
        }

        if (event.target.id == "completed") {
            completedButton();
        }
    }

    const allButton = () => {
        setFilteredList("all")
    }

    const activeButton = () => {
        const copyList = [...list];
        copyList.filter((item) => {
            item.done = false;
        })
        setFilteredList(copyList)
    }

    const completedButton = () => {
        console.log("completedButton");
    }




    return <div className={"filters"}>

        <span className={"todo-count"}>
            <strong>{list.length}</strong> items left
        </span>
        <ul>
            <li>
                <button id={"all"} className={"filterButton"} onClick={onClick}>All</button>
            </li>

            <li>
                <button id={"active"} className={"filterButton"} onClick={onClick} >Active</button>
            </li>

            <li>
                <button id={"completed"} className={"filterButton"} onClick={onClick}>Completed</button>
            </li>
        </ul>
    </div>;
}

export default Filter;
