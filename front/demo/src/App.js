import logo from './logo.svg';
import './App.css';
import MyDate from './component/DateShow';
import React from 'react';
import ProfileCard from './component/ProfileCard';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dates : [
        { day:"02", month:"15", year:"1995" },
        { day:"03", month:"15", year:"1995" },
        { day:"04", month:"15", year:"1995" },
        { day:"05", month:"15", year:"1995" },
        
      ]
    }
  }

  render(){
    return (
      <div>
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
    );
  }
   

}

export default App;
