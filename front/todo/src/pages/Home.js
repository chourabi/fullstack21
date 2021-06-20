import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from 'react';
import TodoListItem from "../components/TodoListItem";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        const token = localStorage.getItem('ttc-token');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/todo/list", requestOptions)
            .then(response => response.json())
            .then(result => {
                this.setState({ todos: result })
            })
            .catch(error => console.log('error', error));
    }

    checkAuth() {
        const token = localStorage.getItem('ttc-token');
        if (token == null) {
            window.location = "/signin";
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12">
                        <Link to="/home/create-todo"><button className="btn btn-primary">Create a new todo</button></Link>
                    </div>
                </div>

                <hr />

                <div className="row mt-3">
                    <div className="col-12">
                        <div class="list-group">
                            

                            {
                                this.state.todos.map((t)=>{
                                    return( <TodoListItem params = {t} />);
                                })
                            }
                            
                           
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default Home;