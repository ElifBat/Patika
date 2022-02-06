import logo from './logo.svg';
import './App.css';
import Form from './Component/Form/index.js'
import List from './Component/List/index.js'
import Filter from './Component/Filter/index.js'
import Footer from './Component/Footer/index.js'
import { useState, useEffect } from 'react';

function App() {
  const [list, setList] = useState([
    { text: "Taste JavaScript", done: false },
    { text: "Code furiously", done: false },
    { text: "Promote Mavo", done: false },
    { text: "Give talks", done: false },
    { text: "Have a life!", done: false },
    { text: "Write tutorials", done: false }]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [filteredList, setFilteredList] = useState([...list]);

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
    let copyList = [...filteredList];
    let deleted = copyList.splice(index, 1);
    setList(copyList);
    setFilteredList(copyList)
  }

  const deleteCompletedList = (completedList) => {
    let copyList = [...list];

    completedList.forEach((completedItem) => {
      let itemString = completedItem.text.toString();
      let counter = 0;

      copyList.forEach((copyItem) => {
        let deletedString = copyItem.text.toString();
        if (deletedString === itemString) {
          console.log("mes");
          copyList.splice(counter, 1);
        }
        counter +=1;
      }) 
    })
    setList(copyList);
    setFilteredList(copyList)
  }
  
  const updateList = () => {
    let copyList = [...list];
    copyList.forEach(listItem => {
      listItem.done = isSelectAll
    })
    setList(copyList);
  }

  return (
    <div>
      <div className={"todoapp"}>
        <Form list={list} setList={setList} setFilteredList={setFilteredList} selectAllItems={selectAllItems} isSelectAll={isSelectAll} />
        <List list={list} selectItem={selectItem} deleteItem={deleteItem} filteredList={filteredList} />
        <Filter list={list} filteredList={filteredList} setFilteredList={setFilteredList} deleteCompletedList={deleteCompletedList} />
      </div>
      <Footer />

    </div>
  );
}

export default App;
