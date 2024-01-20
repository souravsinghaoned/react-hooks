import React, { useEffect, useState, useContext } from "react";
import ComponentS from "./ComponentS";
import { CountContext } from "../App";


function ComponentP() {

    const countContext = useContext(CountContext)

    return (
        <div>
            <ComponentS/>
            <h3>This is component P - {countContext.countState}</h3>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}
export default ComponentP;