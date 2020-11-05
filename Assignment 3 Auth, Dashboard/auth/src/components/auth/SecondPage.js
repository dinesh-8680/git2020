import React, { Component } from 'react';
import fire from '../config/Fire';
import Signup from './Signup'
import './Login.css';
import Home from '../dashboard/Home';

export default class SecondPage extends Component {
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
    componentDidMount(){
        this.authLinstener();
      }
    
      authLinstener(){
        fire.auth().onAuthStateChanged((user)=>{
          if(user)
          {
            this.setState({user})
          }
          else{
            this.setState({user:null})
          }
        })
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
        return (
            <div>
               {this.state.user ? (<Home/>):(<Signup/>)}
            </div>
        )
    }
}