import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";//destructuring 

class About extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return (
                   <div>
                      <h1>About</h1>
                      <h2>This is Namaste react web series</h2>
                      <div>
                        <UserContext.Consumer>
                           {(data)=><h1>{data.loggedInUser}</h1>}
                        </UserContext.Consumer>
                      </div>
                      <User/>
                     <UserClass name={"Rupendra Gonnade"} location="Bhopal"/>
                  </div>
               ) 
        }
}
export default About;