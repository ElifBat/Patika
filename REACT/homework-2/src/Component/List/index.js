import { useState } from 'react';

function List({ list, setList }) {
  const completed = (event) => { event.target.classList.toggle("completed") }
  const deleteList = (event) => { console.log(event.target.className) }

  const onChange = (event) => {

    console.log("test101");
    if (list[0].done == true) {
      setList({...list, [event.target.name]:(event.target.value)})
      console.log(event);
      list.done = false
    }
    else {
      console.log("test103");
      list.done = true
    }
  };

  return <div className="main">
    <input className="toggle-all" type={"checkbox"}></input>

    <ul className="todo-list">{
      list.map((item, i) => (
        <li key={i} className={item.done ? "completed" : ""}>
          <div className={"view"}>
            <input
              name={"done"}
              checked={item.done}
              type={"checkbox"}
              className={"toggle"}
              onChange={onChange}>
            </input>

            <label
              name={"text"}
              className={""}>
              {item.text}
            </label>

            <button
              className={"destroy"}
              onClick={deleteList}>
            </button>
          </div>
        </li>
      ))
    }
    </ul>
  </div>

}

export default List;
