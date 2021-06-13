import React from 'react';

class ProfileCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: props.email,
            name:props.name,
            phone:props.phone,
            phoneIsDisplayed: false
        }
    }

    togglePhoneDisplay(){
        this.setState({
            phoneIsDisplayed : ! this.state.phoneIsDisplayed
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.name}</h3>
                <p>
                <span>{ this.state.email }</span> <br/>
                <span onDoubleClick={ ()=>{
                    this.togglePhoneDisplay();
                } } >
                    {
                        this.state.phoneIsDisplayed === true ?
                        <span>{ this.state.phone }</span>
                        :
                        <span>********</span>
                    }
                </span>
                    
                </p>
            </div>
        );
    }
}

export default ProfileCard;