
import Header from './Header';
import React, { Component } from 'react';
import "../Stylesheet/Signup.css"
import axios from 'axios';
export default class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      image: "",
      owner:'',
      email:""
    };
    this.subMit = this.subMit.bind(this);
    this.handleForm = this.handleForm.bind(this)
  };
  handleForm(e) {
    this.setState({
      [e.target.id]: e.target.files ? e.target.files[0] : e.target.value
    });
  }
  subMit(e) {
    e.preventDefault()
    // console.log(this.state);
    const data = new FormData()
    data.append("email", this.state.email)
    data.append("owner", this.state.owner)
    data.append("name", this.state.name)
    data.append("image", this.state.image)
    axios.post("http://localhost:7878/api/upload", data).then(response => {
      alert(response.data.msg)
    }).catch((e) => {
      alert(e.response.data.msg)
    })

  }
  render() {
    return (
      <div className="SignupCon">
        <Header />
        <form className='SignupForm' action="">
          
          <label htmlFor="">Owner</label>
          <input type="text" name="owner" id="owner" placeholder='Enter your name' onChange={this.handleForm} />

          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" placeholder='Enter your email' onChange={this.handleForm} />
          
          <label htmlFor="">Photo</label>
          <input type="file" name="image" id="image" placeholder='Enter your email' onChange={this.handleForm} />
          
          <label htmlFor="">Product Name</label>
          <input type="text" name="name" id="name" placeholder='Product Name' onChange={this.handleForm} />

          <button onClick={this.subMit} >SIGN UP</button>
        </form>
      </div>
    );
  }
}