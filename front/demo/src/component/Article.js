import React from 'react';


class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:props.title,
            description:props.description,
            nbrLikes:props.nbrLikes,
            didLike:props.didLike
        }
    }


    updateArticle(){
        // request to the server : update id user => likes article
        // article id exmp 3 , user : 5
        // articles_likes (user, article, date ,id )
    }


    render(){
        return(
            <div>
                <p> { this.state.title} </p>

                <button onClick={ ()=>{
                    this.setState({
                        nbrLikes:( this.state.didLike === true ? (this.state.nbrLikes - 1) : (this.state.nbrLikes + 1)  ),
                        didLike: ( ! this.state.didLike )
                    })
                } } > {this.state.nbrLikes} 

                    {
                        this.state.didLike === true ? ' dislike' : ' like'
                    }
                
                 </button>
            </div>
        );
    }
}

export default Article;