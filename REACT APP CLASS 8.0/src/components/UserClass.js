import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
         this.state={
            count:0
         }
         console.log("Child Constructor is called");
    }
    componentDidMount(){
        console.log("Child Component did mount is called");
    }
    render (){
        console.log("Child render is called");
        return (
        <div className='user-card'>
            <h1>{this.state.count}</h1>
            <h2>Name:{this.props.name}</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1 
                })
            }}>Count Increase</button>
            <h3>Location:Bhopal</h3>
            <h3>Contact:rupendra2708@gmail.com</h3>
        </div>
        )
    }
}
export default UserClass;