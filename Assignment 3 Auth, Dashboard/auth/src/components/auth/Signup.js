import React, { Component } from 'react';
import fire from '../config/Fire';
import './Login.css';
import Home from '../dashboard/Home';

export default class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            email:"",
            password:"",
            signup:false,
            msg:"",
            user:{}
        }
    
        this.handleChange = this.handleChange.bind(this);
       // this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }
    
    msghandle(err){
        this.setState({msg:err});
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=>{
            alert(err);
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return(
            <div className="box">
                <h3>SignUp</h3>
                <form   >
                <div className="input-container">
                <input
                        type="text"
                        id = "name"
                        name="name"
                        // placeholder="enter email"
                        onChange={this.handleChange}
                        value={this.state.name}/>
                        <label>Name</label>
                </div>
                <div className="input-container">   
                    <input
                        type="email"
                        id = "email"
                        name="email"
                        // placeholder="enter email"
                        onChange={this.handleChange}
                        value={this.state.email}/>
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
                        <label>Create password</label>

                </div>
                        <p style={{color:"red"}}>{this.state.msg}</p>
                    {/* <button onClick={this.login}>Login</button> */}
                    <button onClick={this.signup} className="btn">Signup</button>
                </form>
            </div>
        )
    }
}
