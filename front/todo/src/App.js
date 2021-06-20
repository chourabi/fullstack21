import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import CreateTodo from './pages/CreateTodo';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={ Home } exact />
            <Route path="/home" component={ Home } exact />
            <Route path="/signin" component={ SignInPage } exact />
            <Route path="/signup" component={ SignUpPage } exact />
            <Route path="/home/create-todo" component={ CreateTodo } exact />
            
            
            

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
