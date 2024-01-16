import React, { useState } from "react";

function HookCounterTwo(){
    let increment = 0
    let [count, setCount] = useState(increment)


    return(
        <div>
            Count : {count}<br/>
            <button onClick={()=>{setCount(increment)}}>Reset</button>
            <button onClick={()=>{setCount(prevCount => prevCount + 1)}}>Increment</button>
            <button onClick={()=>{setCount(prevCount => prevCount - 1)}}>Decrement</button>
        </div>
    )
}
export default HookCounterTwo;