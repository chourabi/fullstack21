import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import React from 'react';
  
  class SignUpPage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          username:"",
          password:"",
          errMessage:"",
          successMessage:""
      }
    }

    
    createAccount(){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"username":this.state.username,"password":this.state.password});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:5000/signup", requestOptions)
  .then(response => response.json())
  .then(result =>{
      if (result.success) {
          this.setState({successMessage:"account created successfully."})
      }else{
          this.setState({errMessage:result.message});
      }
  })
  .catch(error => console.log('error', error));
    }
  
    render(){
      return (
          <div className="container">
              <h1>Create your free account</h1>
              <div className="form-group">
                <label>User name</label>
                <input onChange={ (e)=>{ this.setState({username:e.target.value}) } } type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input onChange={ (e)=>{ this.setState({password:e.target.value}) } } type="password" className="form-control" />
              </div>
              <div className="form-group">
                <button onClick={ ()=>{ this.createAccount() } } className="btn btn-info mt-2">Create account</button>
              </div>
              

              {
                  this.state.successMessage !== '' ?
                  <div className="form-group mt-2">
                <div className="alert alert-success">{this.state.successMessage}</div>
              </div>
              :<div></div>
              }
              {
                  this.state.errMessage !== '' ?
                  <div className="form-group mt-2">
                <div className="alert alert-danger">{this.state.errMessage}</div>
              </div>
              :
              <div></div>
              }
              
              
              

              
              
              
          </div>
      );
    }
    
  }
  
  export default SignUpPage;
  