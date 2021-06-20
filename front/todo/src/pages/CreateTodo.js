import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from 'react';

class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            errMessage:'',
            title:"",
            description:''
        }
    }

    createNewTodo() {
        const token = localStorage.getItem('ttc-token');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);

        var raw = JSON.stringify({ "title": "create a new server", "description": "create a new mongoDB node based server for the group." });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/todo/add", requestOptions)
            .then(response => response.json())
            .then(result =>{
                if (result.success === true) {
                    window.location = '/home';
                }
            })
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div className="container">
                <h1>Create a new Todo</h1>
                <div className="form-group">
                    <label>Title</label>
                    <input onChange={(e) => { this.setState({ title: e.target.value }) }} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea onChange={(e) => { this.setState({ description: e.target.value }) }} className="form-control" rows="5" ></textarea>
                </div>
                <div className="form-group">
                    <button onClick={() => { this.createNewTodo() }} className="btn btn-info mt-2">Create Todo</button>
                </div>


               
                {
                    this.state.errMessage !== '' ?
                        <div className="form-group mt-2">
                            <div className="alert alert-danger">{this.state.errMessage}</div>
                        </div>
                        :
                        <div></div>
                }







            </div>
        );
    }
}

export default CreateTodo;