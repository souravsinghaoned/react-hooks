import React, { useState } from "react";

function HookArray() {
    const [items, setitems] = useState([]);
    const addNumber = () => {
        setitems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addNumber}>Add random number</button>
            {
                items.map(item => {
                    return (
                        <li key={item.id}>{item.value}</li>
                    )
                })
            }
        </div>
    )
}
export default HookArray;