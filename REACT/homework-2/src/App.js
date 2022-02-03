import logo from './logo.svg';
import './App.css';
import Form from './Component/Form/index.js'
import List from './Component/List/index.js'
import Filter from './Component/Filter/index.js'
import { useState } from 'react';


function App() {
  const [list, setList] = useState([
    { text: "Taste JavaScript", done: true },
    { text: "Code furiously", done: true },
    { text: "Promote Mavo", done: false },
    { text: "Give talks", done: false },
    { text: "Write tutorials", done: true },
    { text: "Have a life!", done: false }
  ]);

  return (
    <div className={"todoapp"}>
      <Form list={list} setList={setList} />

      <div className={"main"}>
      <List list={list} setList={setList} />
      <Filter list={list} />
      </div>

    </div>
  );
}

export default App;
