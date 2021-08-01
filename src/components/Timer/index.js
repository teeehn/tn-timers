import React, { useState, useEffect } from 'react'
import './timer.css'

function Timer({
    setting = 10
}) {
    const [time, setTime] = useState(setting)
    // Timer is stopped when initially loaded.
    const [stop, setStop] = useState(true)

    function tick() {
        setTime(time - 1)
    }

    function reset() {
        setStop(true)
        setTime(setting)
    }
    
    useEffect(() => {
        if (time === 0) {
            return false
        }
        if (!stop) {
            setTimeout(tick, 1000)
        }
    })

    function Controls() {
        if (time === 0) {
            return (
                <button onClick={reset}>Reset</button>
            )
        }
        if (stop) {
            return (
                <>
                    <button onClick={() => setStop(false)}>Start</button>
                    {
                        time !== setting &&
                        <button onClick={reset}>Reset</button>
                    }
                </>
            )
        }
        return (
            <button onClick={() => setStop(true)}>Stop</button>
        )
    }

    return (
        <div>
            <h1>{ time }</h1>
            <div className="timer__wrapper--buttons">
                <Controls />
            </div>
        </div>
    )
}

export default Timer
