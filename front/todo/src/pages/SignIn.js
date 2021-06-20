import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import React from 'react';
  
  class SignInPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            errMessage:"",
            successMessage:"",
            passwordShow:false
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
  
  fetch("http://localhost:5000/auth", requestOptions)
    .then(response => response.json())
    .then(result =>{
        console.log(result);
        if (result.success) {
            const token = result.token;
            localStorage.setItem('ttc-token',token);
            window.location = '/home' ;
        }else{
            this.setState({errMessage:result.message});
        }
    })
    .catch(error => console.log('error', error));
      }
    
      render(){
        return (
            <div className="container">
                <h1>Authentification</h1>
                <div className="form-group">
                  <label>User name</label>
                  <input onChange={ (e)=>{ this.setState({username:e.target.value}) } } type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type={ this.state.passwordShow === true ? 'text' : 'password' } onChange={ (e)=>{ this.setState({password:e.target.value}) } }  className="form-control" />
                  <a onClick={()=>{
                      this.setState({passwordShow: ! this.state.passwordShow})
                  }}>toggle password</a>  
                </div>

                <div className="form-group">
                  <button onClick={ ()=>{ this.createAccount() } } className="btn btn-info mt-2">Login now</button>
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
                
                
                <Link to="signup">create an account</Link>
                
  
                
                
                
            </div>
        );
      }
      
  }
  
  export default SignInPage;