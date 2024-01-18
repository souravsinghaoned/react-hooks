import React from "react";


class CounterClass extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count : 0,
            name : ''
        }
    }
    
    componentDidMount(){
        // document.title = `Count : ${this.state.count}`
        console.log("componentDidMount")
    }

    componentDidUpdate(prevProps, prevState){
        // document.title = `Count : ${this.state.count}`
        if(prevState.count != this.state.count){
            console.log("componentDidUpdate")
        }
        // console.log(prevProps)
        // console.log(prevState)
    }

   

    incrementCount = ()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    render(){
        return(
            <div>
                <input 
                    type="text"
                    value={this.state.name}
                    onChange={(e)=>this.setState({name : e.target.value})}/>
                <button onClick={this.incrementCount}>Count : {this.state.count}</button>
            </div>
        )
    }
}
export default CounterClass;