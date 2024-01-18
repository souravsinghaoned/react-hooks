import React from "react";


class CounterClass extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count : 0
        }
    }
    
    // componentDidMount(){
    //     document.title = `Count : ${this.state.count}`
    //     console.log("componentDidMount")
    // }

    // componentDidUpdate(prevProps, prevState){
    //     document.title = `Count : ${this.state.count}`
    //     console.log("componentDidUpdate")
    //     console.log(prevProps)
    //     console.log(prevState)
    // }
    
    incrementCount = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.incrementCount}>Count : {this.state.count}</button>
            </div>
        )
    }
}
export default CounterClass;