import React, { useEffect, useState } from "react";


function HookEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Count : ${count}`
    })
    const incrimentCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            <button onClick={incrimentCount}>Count : {count}</button>
        </div>
    )
}
export default HookEffect;