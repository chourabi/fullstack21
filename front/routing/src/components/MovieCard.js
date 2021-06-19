import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

  const myStyles = {
    main:{
        minHeight:'100vh'
    }
}

class MovieCard extends React.Component {
  
    constructor(props){
      super(props)
      this.state = {
          title: props.title,
          photoURL:props.photoURL,
          id:props.id
      }
    }
  
  
    render(){
      return (
        <div className="card bg-dark">
            <div className="card-body">
                <img src={this.state.photoURL} width="100%" />
                <h5 className="text-white">{this.state.title}</h5>
                <Link to={ '/movie/'+this.state.id } >details...</Link>
            </div>
        </div>
            );
    }
  }

export default MovieCard;