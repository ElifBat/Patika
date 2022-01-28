import { useState } from "react";
//import Counter from "./components/counter";
// import InputExample from "./components/InputExample";
import LifecycleExample from "./components/LifecycleExample"


function App() {
  const [isVisible, setIsVisible] = useState([true]);

  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <InputExample/> */}
      {/* {isVisible && <LifecycleExample />}
      <br />
      <button onClick={() => setIsVisible(!isVisble)}>Toggle</button> */}
    </div>
  );
}

export default App;
