
import Header from './Header';
import React, {Component} from 'react';
import "../Stylesheet/Signup.css"
import axios from 'axios';
export default class Signup extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"",
      email:"",
      password:"",
      vPassword:"",
    };
    this.subMit= this.subMit.bind(this);
    this.handleForm=this.handleForm.bind(this)
  };
  handleForm(e){
    this.setState({
      [e.target.id] : e.target.value
    });
  }
  subMit(e){
    e.preventDefault()
    // console.log(this.state);
    const data = new FormData()
    data.append("email", this.state.email)
    data.append("password", this.state.password)
    data.append("name", this.state.name)
    data.append("verifiedPassword", this.state.vPassword)
    axios.post("http://localhost:7878/api/user-register", data).then(response =>{
      alert(response.data.msg)
    }).catch((e)=>{
      alert(e.response.data.msg)
    })

  }
  render() {
    return (
      <div className="SignupCon">
     <Header/>
        <form className='SignupForm' action="">
        <label htmlFor="">Name</label>
        <input type="text" name="Name" id="name" placeholder='Enter your name' onChange= {this.handleForm} />
        <label htmlFor="">Email</label>
        <input type="email" name="Email" id="email" placeholder='Enter your email' onChange={this.handleForm}/>
        <label htmlFor="">Password</label>
        <input type="password" name="Password" id="password" placeholder='Enter your Password' onChange={this.handleForm}/>
        <label htmlFor="">Verify Password</label>
        <input type="password" name="vPassword" id="vPassword" placeholder='Verify Password' onChange={this.handleForm} />
        <button onClick={this.subMit} >SIGN UP</button>
        </form>
    </div>        
    );
  }
}