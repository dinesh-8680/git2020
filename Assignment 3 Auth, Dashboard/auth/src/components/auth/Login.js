import React, { Component} from 'react';
import fire from '../config/Fire';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:"",
            password:"",
            signup:false,
            msg:""
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        //this.signup = this.signup.bind(this);
    }
    msghandle(err){
        this.setState({msg:err});
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=>{
           alert(err)
        })
    }
   
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div className="box">
                <h3>LogIn</h3>
                <form>
                {/* <span class="text-center">login</span> */}
                <div className="input-container">
                    <input
                        type="email"
                        id = "email"
                        name="email"
                        // placeholder="enter email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        required=""/>
                        <label>Email</label>
                </div>
                <div className="input-container">
                    <input
                        type="password"
                        id = "password"
                        name="password" 
                        // placeholder="enter password"
                        onChange={this.handleChange}
                        value={this.state.password}/>
                        <label>Password</label>
                </div>
                    <p style={{color:"red"}}>{this.state.msg}</p>
                    <button onClick={this.login} className="btn">Login</button>
                    {/* <button onClick={this.signup} className="btn">Signup</button> */}
                </form>
            </div>
        )
    }
}
