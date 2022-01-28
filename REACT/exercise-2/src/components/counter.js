import { useState } from 'react';


function Counter() {
    const [number, setNumber] = useState(0);
    function increase() {
        setNumber(number + 1)
    }

    function decrease() {
        setNumber(number - 1)
    }

    return <div>
        <h1>Counter</h1>
        <h3>{number}</h3>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrise</button>

    </div>;
}

export default Counter;
