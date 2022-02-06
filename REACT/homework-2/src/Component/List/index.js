import { useState, useEffect } from 'react';

function List({ selectItem, deleteItem, filteredList }) {

  return <div>
    <ul className="todo-list">{
      filteredList.map((item, index) => (
        <li id={index} key={item.text} className={"todo"}>
          <input
            checked={item.done}
            name={"toggle"}
            type={"checkbox"}
            className={"toggle"}
            onChange={() => selectItem(index)}
          />

          <label
            htmlFor={"toggle"}
            className={`text ${item.done && "completed"}`}>
            {item.text}
          </label>

          <button
            className={"destroy"}
            onClick={() => deleteItem(index)}
          >
          </button>
        </li>)
      )
    }
    </ul>
  </div>
}

export default List;
