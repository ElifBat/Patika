import { useState } from 'react';
const buttonDOM = document.getElementsByClassName("filterButton")

function Filter({ list }) {
    const [isSelected, setIsSelected] = useState(false);

    const onClick = (event) => {
        Object.values(buttonDOM).map((item)=> item.classList.remove("selected"))
        event.target.classList.toggle("selected");
        }

    return <div className={"filters"}>
        
        <span className={"todo-count" }>
            <strong>{list.length}</strong> items left
        </span>
        <ul>
            <li>
                <button className={"filterButton"} onClick={onClick}>All</button>
            </li>

            <li>
                <button className={"filterButton"} onClick={onClick} >Active</button>
            </li>

            <li>
                <button className={"filterButton"} onClick={onClick}>Completed</button>
            </li>
        </ul>
    </div>;
}

export default Filter;
