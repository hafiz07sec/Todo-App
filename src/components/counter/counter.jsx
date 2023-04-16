import { useState } from 'react';

import './counter.css'
import CounterButton from './CounterButton'

export default function Counter() {
    const [count, setCount] = useState(0);

    function incrementCounter(by) {
        setCount(count + by);

    }
    function decrementCounter(by) {
        setCount(count - by);

    }
    function resetCounter(by) {
        setCount(0);

    }

    return (
        <>
            <span className="count">{count}</span>
            <CounterButton by={1} incremetMethod={incrementCounter} decremetMethod={decrementCounter} />
            <CounterButton by={2} incremetMethod={incrementCounter} decremetMethod={decrementCounter} />
            <CounterButton by={5} incremetMethod={incrementCounter} decremetMethod={decrementCounter} />
            <button className='resetButton' onClick={resetCounter}>Reset</button>
        </>
    )
}
