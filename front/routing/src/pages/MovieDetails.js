import React from "react";

const myStyles = {
    main:{
        minHeight:'100vh'
    }
}

class MovieDetails extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
          id:props.match.params.id,
          movie: null
      }
    }

    componentDidMount(){
        var myHeaders = new Headers();
myHeaders.append("Cookie", "PHPSESSID=ts9vsqacsmmer157aopma51t4a");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://yts.mx/api/v2/movie_details.json?movie_id="+this.state.id, requestOptions)
  .then(response => response.json())
  .then(result => {
      this.setState({
          movie:result.data.movie
      })
  })
  .catch(error => console.log('error', error));
    }
  
  
    render(){
      return (
        <div className="container-fluid bg-dark" style={myStyles.main}>
                
        <div className="pt-2">
            <div className="form-group">
                
            </div>
        </div>

        <div className="pt-5">
            <div className="row">
                {
                    this.state.movie === null ?
                    <div className="pt-5 text-center text-white">
                        <h2>Chargement...</h2>
                    </div>:
                    <div>

                        <div className="row">
                            <div className="col-sm-6">
                                <img width="100%" src={this.state.movie.large_cover_image} />
                            </div>
                            <div className="col-sm-6">
                                <h1 className="text-white">{this.state.movie.title}</h1>
                                <p className="text-white">{this.state.movie.description_full}</p>
                                <p className="text-white"><i class="fas fa-calendar-week"></i> {this.state.movie.year}</p>
                                <div className="row">
                                {
                                    this.state.movie.torrents.map((t)=>{
                                        return <div className="col-sm-6">
                                            <a className="btn btn-primary" style={{width:'100%'}} href={t.url} download >{t.quality}</a>
                                        </div>
                                 
                                    })
                                }
                                 
                                
                                    
                            </div>
                            </div>

                            
                            
                                
                        </div>

                    </div>
                }
            </div>
        </div>

        

    </div>
            );
    }
  }

export default MovieDetails;