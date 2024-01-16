import React, { useState } from "react";

function HookCounter(){
    let [count, setCount] = useState(0)

    

    return(
        <div>
            <button onClick={()=>{setCount(prevCount =>prevCount+1)}}>Hook Count : {count}</button>
        </div>
    )
}
export default HookCounter;