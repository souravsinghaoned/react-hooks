import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";



function DataFatchingOne(){
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({}) 

    useEffect(()=>{
        const response = axios.get('https://jsonplaceholder.typicode.com/posts/1')
        response.then(response =>{
            console.log(response.data)
            setIsLoading(false)
            setError('')
            setPost(response.data)
        })
        response.catch(error =>{
            setIsLoading(false)
            setPost({})
            setError("Something went wrong.")
        })
    },[])
    return(
        <div>
           {isLoading ? "Loading ...": post.title}
           {error ? error : null}
        </div>
    )
}
export default DataFatchingOne;