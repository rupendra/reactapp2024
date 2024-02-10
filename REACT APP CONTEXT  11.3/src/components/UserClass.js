import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
         this.state={
            userInfo:{name:"Mahesh",location:"Lanji"}
         }
    }
   async componentDidMount(){
    const data=await fetch("https://api.github.com/users/rupendra");
    const json=await data.json();
    this.setState({
        userInfo:json
    })
    }
    componentDidUpdate(){
        console.log("Component did updated is called")
    }
    componentWillUnmount(){
        console.log("Compoent unmounted")
    }
    render (){
        const {name,location,avatar_url}=this.state.userInfo; 
        return ( 
        <div className='user-card'>
            <img src={avatar_url} style={{width:200}}/>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h3>Contact:rupendra2708@gmail.com</h3>
        </div>
        )
    }
}
export default UserClass;