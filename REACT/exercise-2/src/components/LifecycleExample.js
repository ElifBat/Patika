import { useState, useEffect } from 'react';

function LifecycleExample() {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log("Component mounted");

        const interval = setInterval(() => {
            setNumber((n) => n + 1);
        }, 1000);

        return () => {
            console.log('componentWillUnmount')
            clearInterval(interval)
        }

    }, [])

    useEffect(() => {
        console.log("State of number updated")
    }, [number]);

    return <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number + 1)}>Decrease</button>
    </div>;
}

export default LifecycleExample;
