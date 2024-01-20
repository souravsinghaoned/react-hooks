import { React, useReducer } from "react";

const initialState = {
    firstCount: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {firstCount : state.firstCount + 1}
        case 'decrement':
            return {firstCount : state.firstCount - 1};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count : {count.firstCount}</div>
            <button onClick={() => dispatch({type :'increment'})}>Increment</button>
            <button onClick={() => dispatch({type :'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
        </div>
    )
}
export default CounterTwo;