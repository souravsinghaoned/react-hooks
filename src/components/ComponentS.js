import React, { useEffect, useState, useContext } from "react";
import { CountContext } from "../App";


function ComponentS() {

    const countContext = useContext(CountContext)

    return (
        <div>
            <h3>This is component S - {countContext.countState}</h3>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}
export default ComponentS;