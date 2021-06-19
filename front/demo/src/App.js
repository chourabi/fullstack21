import logo from './logo.svg';
import './App.css';
import MyDate from './component/DateShow';
import React from 'react';
import ProfileCard from './component/ProfileCard';
import Article from './component/Article';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dates : [
        { day:"02", month:"15", year:"1995" },
        
      ],

      articles:[
        { didLike:true, title:"my first react app", nbrLikes:16, description:"this is my first react app, it's amazing" },
        { didLike:false, title:"my second react app", nbrLikes:0, description:"this is my second react app, it's amazing" },
        
      ]
    }
  }

  render(){
    return (
      <div>
        {
          /**
           * <div>
      <h1>helo world</h1>

      <button onClick= {  ()=>{
        const dates = this.state.dates;
        dates.pop();
        

        this.setState({
          dates:dates
        })
        
        
      }  }  >POP DATE</button>

      {
        this.state.dates.map((e)=>{
          return <MyDate day={e.day} month={e.month} year={e.year}  />
        })
      }

      {
        // this is a comment
      }


      <ProfileCard phone="93863732" name="taher chourabi" email="tchourabi@gmail.com" />
    

  </div>
           */
        }



        {
          this.state.articles.map((a)=>{
            return <Article didLike={a.didLike} title={a.title} description={a.description} nbrLikes={a.nbrLikes} />; 
          })
        }



      </div>
    );
  }
   

}

export default App;
