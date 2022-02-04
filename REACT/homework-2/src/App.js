import logo from './logo.svg';
import './App.css';
import Form from './Component/Form/index.js'
import List from './Component/List/index.js'
import Filter from './Component/Filter/index.js'
import { useState, useEffect } from 'react';


function App() {
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [list, setList] = useState([
    { text: "Taste JavaScript", done: true },
    { text: "Code furiously", done: false },
    { text: "Promote Mavo", done: true },
    { text: "Give talks", done: false },
    { text: "Have a life!", done: true },
    { text: "Write tutorials", done: false }]);

  useEffect(() => updateList(), [isSelectAll]);

  const selectItem = (index) => {
    let copyList = [...list];
    copyList[index].done = !copyList[index].done;
    setList(copyList);
  }

  const selectAllItems = () => {
    setIsSelectAll((prevState) => !prevState);
  }

  const deleteItem = (index) => {
    let copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  }

  const updateList = () => {
    let copyList = [...list];
    copyList.forEach(listItem => {
      listItem.done = isSelectAll
    });
    setList(copyList);
  }

  return (
    <div className={"todoapp"}>
      <Form list={list} setList={setList} selectAllItems={selectAllItems} isSelectAll={isSelectAll} />
      <List list={list} selectItem={selectItem} deleteItem={deleteItem} />
      <Filter list={list} />
    </div>
  );
}

export default App;
