import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    function incrementCounter() {
        setCount(count + 5)
    }

    function decrementCounter() {
        setCount(count - 5)
    }

    return (
        <>
            <h1>Cuenta: {count}</h1>
            <button onClick={() => incrementCounter()}>+</button>
            <button onClick={() => decrementCounter()}>-</button>
        </>
    )
}
