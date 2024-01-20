import { React, useReducer } from "react";

const initialState = {
    firstCount: 0,
    secondCount: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCount: state.firstCount + action.payload };
        case 'decrement':
            return { ...state, firstCount: state.firstCount - action.payload };
        case 'incrementsecondCount':
            return { ...state, secondCount: state.secondCount + action.payload };
        case 'decrementsecondCount':
            return { ...state, secondCount: state.secondCount - action.payload };
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
            <div>First Count : {count.firstCount}, Second Count : {count.secondCount}</div>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: 'incrementsecondCount', payload: 5 })}>
                Increment second count by 5
            </button>
            <button onClick={() => dispatch({ type: 'decrementsecondCount', payload: 5 })}>
                Decrement second count by 5
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </div>
    )
}
export default CounterTwo;