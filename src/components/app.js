import React, { useState } from 'react'
import Timer from './Timer'

function App(){
    const [count, setCount] = useState(0)
    const increment = 1;

    function update_count(op) {
        if ( op === 'ADD' ) {
            return setCount(count + increment)
        }
        if ( op === 'SUBTRACT' ) {
            return setCount(count - increment)
        }
        // RESET
        setCount(0)
    }

    return (
        <Timer />
    )
}

export default App
