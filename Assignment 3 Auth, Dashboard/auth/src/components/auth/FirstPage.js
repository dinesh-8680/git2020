import React, { Component } from 'react';
import Login from './Login';
import Home from '../dashboard/Home';
import fire from '../config/Fire';

class FirstPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user:{}
    }
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
  
  render() {
    return(
      <div >
        {this.state.user ? (<Home user={this.state.user}/>):(<Login/>)}
      </div>
    ) 
  }
}
export default FirstPage;
