import React from "react";
import { useReducer,useEffect } from "react";
import axios from "axios";

const initialState = {
    isLoading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FATCH_SUCCESS':
            return {
                isLoading: false,
                error: '',
                post: action.payload
            }
        case 'FATCH_FAILED':
            return {
                isLoading: true,
                error: 'Something is wrong!',
                post: {}
            }
        default:
            return state
    }
}

function DataFatchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const response = axios.get('https://jsonplaceholder.typicode.com/posts/1')
        response.then(response => {
            dispatch({ type: 'FATCH_SUCCESS', payload: response.data })
        })
        response.catch(error => {
            dispatch({ type: 'FATCH_FAILED' })
        })
    }, [])

    return (
        <div>
            {state.isLoading ? "Loading ..." : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}
export default DataFatchingTwo;