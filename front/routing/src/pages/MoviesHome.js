import React from "react";
import MovieCard from "../components/MovieCard";

const myStyles = {
    main:{
        minHeight:'100vh'
    }
}

class MoviesHome extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
          movies:[]
      }
    }

    componentDidMount(){
        this.getMoviesList();
    }

    searchFor(str){
        

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=ts9vsqacsmmer157aopma51t4a");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://yts.mx/api/v2/list_movies.json?query_term="+str, requestOptions)
        .then(response => response.json())
        .then(result =>{
            if (result.data.movie_count != 0) {
                this.setState({
                    movies:result.data.movies
                })
            }
        })
        .catch(error => console.log('error', error));
    }

    getMoviesList(){
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=ts9vsqacsmmer157aopma51t4a");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://yts.mx/api/v2/list_movies.json", requestOptions)
        .then(response => response.json())
        .then(result =>{
            this.setState({
                movies:result.data.movies
            })
        })
        .catch(error => console.log('error', error));
    }
  
  
    render(){
      return (
            <div className="container-fluid bg-dark" style={myStyles.main}>
                
                <div className="pt-2">
                    <div className="form-group">
                        <label className="text-white">Search for...</label>
                        <input onChange={(e)=>{ 
                            const v = e.target.value;
                            this.searchFor(v);
                         }} className="form-control bg-dark text-white" />
                    </div>
                </div>

                <div className="pt-5">
                    <div className="row">
                        {
                            this.state.movies.map((m)=>{
                                return <div className="col-sm-6 col-md-3">
                                <MovieCard id={m.id} title={m.title} photoURL={m.large_cover_image} />
                           </div>
                            })
                        }
                    </div>
                </div>

                

            </div>
            );
    }
  }

export default MoviesHome;