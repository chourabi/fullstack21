import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import React from 'react';
import MoviesHome from './pages/MoviesHome';
import MovieDetails from './pages/MovieDetails';


class App extends React.Component {
  
  constructor(props){
    super(props)
  }


  render(){
    return (
      <Router>
            <div>
              
      
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/movie/:id" component = {MovieDetails} exact /> 
                <Route path="/" component={MoviesHome} exact />
                <Route path="/home" component={MoviesHome} exact />
                
                <Route path="*" component={NotFound} exact />
                
              </Switch>
            </div>
          </Router>
        );
  }
}



function NotFound() {
  return <h2>404</h2>;
}

export default App;
