import React, { useEffect, useState } from "react";


function HookEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        document.title = `Count : ${count}`
        console.log("This is from useEffect.")
    },[count])
    const incrimentCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            <input 
                type="text"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick={incrimentCount}>Count : {count}</button>
        </div>
    )
}
export default HookEffect;