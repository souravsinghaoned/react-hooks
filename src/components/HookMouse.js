import React, { useEffect, useState } from "react";

function HookMouse(){
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = (e) =>{
        console.log('This is from hook logMousePosition function')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("This is from Hook Mouse event")
        window.addEventListener("mousemove",logMousePosition)
    },[])
    return(
        <div>
            Hook Mouse Position <br/>
            X - {x}, Y -{y}
        </div>
    )
}
export default HookMouse;