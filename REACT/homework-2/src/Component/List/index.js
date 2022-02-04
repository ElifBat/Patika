import { useState, useEffect } from 'react';

function List({ list, selectItem, deleteItem}) {

  return <div>
    <ul className="todo-list">{
      list.map((item, index) => (
        <li key={item.text} className={"todo"}>
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
