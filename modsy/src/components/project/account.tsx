import React from "react";
import 'rc-slider/assets/index.css';
import { BrowserRouter, Route, Link ,Redirect} from "react-router-dom";
import { Card, Button } from 'reactstrap';
import $ from "jquery";
import Room from "./room";
import Slider, { createSliderWithTooltip } from 'rc-slider';
import axios from 'axios';

interface State{
	roomName: string;
  email: string;
  password: string;
  signin: boolean;
  afterSignin: boolean;
  loginbtn: boolean;
  email_error: string;
  password_error: string;
  email_exist: string;
}

interface Props{

}


class Account extends React.Component<Props, State> {
	constructor(props: Props) {
    super(props);
    this.state = {
    	roomName: "",
      email: "",
      password: '',
      email_error: '',
      password_error: '',
      signin: false,
      afterSignin: false,
      loginbtn: false,
      email_exist: ''
      
    }
    this.login = this.login.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handlelogin = this.handlelogin.bind(this)

    this.handleform = this.handleform.bind(this)
}

componentDidMount(){
    var x = localStorage.getItem('current_user')
    if(x){
      // alert("dfgdfsh")
      this.setState({roomName: "" + x})
    }
        // this.setState({roomName: "" + x})
    console.log(x)
  }

login(event: React.ChangeEvent<HTMLInputElement>){
  // e.target.name =
  console.log(event.target.name)
  // var change = {}
    if(event.target.name === "email"){
      this.setState({email: event.target.value, email_error: ''})
    }
    if(event.target.name === "password"){
      this.setState({password: event.target.value, password_error: ''})
    }
     
  // console.log(event.target.value)
}

// handlelogin(){

// }

handlelogin(e: React.SyntheticEvent): void{
  console.log(this.state);
  e.preventDefault();

  if(this.state.email && this.state.password){
    var data = {
    email: this.state.email,
    password: this.state.password
  }

  axios.post("http://10.90.90.117:5000/api/v1/users/signin" , data).then(res=>{
    console.log(res)

    localStorage.setItem("current_user", res.data.email)

    if(res.data.email){
      
      this.setState({
        afterSignin: true
      })
    }else{
      this.setState({email_exist: res.data.message})
    }
    
  })
  }else{
  if(this.state.email === ""){ 
    this.setState({email_error: ' EMAIL REQUIRED '})
  }if(this.state.password === ""){
    this.setState({password_error: ' PASSWORD REQUIRED '})
  }
}

  
}


result(){
  this.setState({signin: !this.state.signin})
}

handleform(x: number){
  // console.log(x)
  this.setState({signin: !this.state.signin})

}

handleSignup(e: React.SyntheticEvent): void{
  console.log(this.state);
  e.preventDefault();

  if (this.state.email && this.state.password){
    var data = {
    user:{
      email: this.state.email,
      password: this.state.password
    }
  }

  axios.post("http://10.90.90.117:5000/api/v1/users", data).then(res=>{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    localStorage.setItem("current_user", res.data.email)
    console.log(res);
    if(res.data.email){
      
      this.setState({
        afterSignin: true
      })
    }else{
      this.setState({email_exist: res.data.message})
    }
    
  })
}else{
  if(this.state.email === ""){ 
    this.setState({email_error: ' EMAIL REQUIRED '})
  }if(this.state.password === ""){
    this.setState({password_error: ' PASSWORD REQUIRED '})
  }
}

  
}

renderRedirect(){
  if(this.state.afterSignin){
    return <Redirect to={{ pathname: '/recommendation'}} />
  }
}

  render() {
   

    return (
      <div className="App-layout" id="room">
      {this.renderRedirect()}
      {
        this.state.signin ?  
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="Account-page-heading">
              Create an account
            </div>
              <p>to save your project and select your Modsy design package</p>
              <br/>
              <form onSubmit={this.handleSignup}>
                <div className="Title-heading">
                  ENTER YOUR EMAIL
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control" value={this.state.email}  onChange={this.login} />
                  <p className="email_error">{this.state.email_error}</p>
                </div>
                <div className="errors"></div>
                <div className="Title-heading">
                  SET A PASSWORD
                </div>
                <div className="form-group">
                  <input type="password" name="password" className="form-control" value={this.state.password}  onChange={this.login} />
                  <p className="email_error">{this.state.password_error}</p>
                </div>
                <div className="errors"></div>
                <div className="Title-heading">
                  HOW DID YOU HEAR ABOUT MODSY? (OPTIONAL)
                </div>
                <div className="form-group">
                  <input className="form-control" />
                </div>
                <div className="errors">
                  <p className="email_error">{this.state.email_exist}</p>
                </div>
                <div className="container footer home-btn">
                  <button className="accountbtn" type="submit" value="submit"><b>Save Your Project</b></button>
                </div>
                <div className="signin">
                  Already have an account?
                  <span> <Link to="#" className="login-link" onClick={()=>this.handleform(1)}>Log in here</Link></span>
                </div>
              </form>
          </div>
          <div className="col-lg-3"></div>
        </div> :
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="Account-page-heading">
              Login account
            </div>
              <p>to save your project and select your Modsy design package</p>
              <br/>
              <form onSubmit={this.handlelogin}>
                <div className="Title-heading">
                  ENTER YOUR EMAIL
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control" value={this.state.email}  onChange={this.login} />
                  <p className="email_error">{this.state.email_error}</p>
                </div>
                <div className="errors"></div>
                <div className="Title-heading">
                  SET A PASSWORD
                </div>
                <div className="form-group">
                  <input type="password" name="password" className="form-control" value={this.state.password}  onChange={this.login} />
                  <p className="email_error">{this.state.password_error}</p>
                </div>
                <div className="form-group">
                </div>
                <div className="errors">
                  <p className="email_error">{this.state.email_exist}</p>
                </div>
                <div className="container footer home-btn">
                  <button className="accountbtn" type="submit" value="submit"><b>Save Your Project</b></button>
                </div>
                <div className="signin">
                  Create a new account?
                  <span> <Link to="#" className="login-link" onClick={()=>this.handleform(0)}>Register here</Link></span>
                </div>
              </form>
          </div>
          <div className="col-lg-3"></div>
        </div>
      }   
      </div>
    );
  }
}

export default Account;