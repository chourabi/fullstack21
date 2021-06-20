import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.params.title,
            description: props.params.description,

            titleEdit: props.params.title,
            descriptionEdit: props.params.description,


            add_date: props.params.add_date,

            status: props.params.status,
            user_id: props.params.user_id,
            _id: props.params._id,


            isEditing: false
        }
    }


    componentDidMount() {
        console.log(this.state);
    }


    closeTodo() {
        const token = localStorage.getItem('ttc-token');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);
        var raw = JSON.stringify({ "todo": this.state._id });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/todo/close", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({status : 1})
            })
            .catch(error => console.log('error', error));
    }

    updateTodo() {
        const token = localStorage.getItem('ttc-token');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);

        var raw = JSON.stringify({ "title": this.state.titleEdit, "description": this.state.descriptionEdit, "todo": this.state._id });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/api/todo/update", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success === true) {
                    this.setState({ isEditing: false })
                }
            })
            .catch(error => console.log('error', error));
    }


    deleteTodo(){
        const token = localStorage.getItem('ttc-token');
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);

        var raw = JSON.stringify({"todo":this.state._id});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:5000/api/todo/delete", requestOptions)
          .then(response => response.text())
          .then(result =>{
              window.location = "/home";
          })
          .catch(error => console.log('error', error));
    }



    render() {
        return (
            <div class="list-group-item list-group-item-action  ">

                {
                    this.state.isEditing === true ?
                        <div>
                            <div className="form-group">
                                <label>Title</label>
                                <input value={this.state.titleEdit} onChange={(e) => { this.setState({ titleEdit: e.target.value }) }} type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea value={this.state.descriptionEdit} onChange={(e) => { this.setState({ descriptionEdit: e.target.value }) }} className="form-control" rows="5" ></textarea>
                            </div>
                        </div> :
                        <div>

                            <h3>{this.state.title}
                                {
                                    this.state.status === 0 ?
                                        <span className="badge bg-warning">in progress...</span> :
                                        <span className="badge bg-success">done</span>

                                }
                            </h3>
                            <p>{this.state.description}</p>
                            <p><small>{this.state.add_date}</small></p>
                        </div>

                }






                {
                    this.state.isEditing === true ?
                        <div className="row">
                            <div className="col">
                                <button onClick={
                                    () => {
                                        this.updateTodo();
                                    }
                                } className="btn btn-success">Save</button>
                            </div>
                            <div className="col">
                                <button onClick={
                                    () => {
                                        this.setState({
                                            isEditing: false
                                        })
                                    }
                                } className="btn btn-secondary">Cancel</button>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="row">
                                {
                                    this.state.status === 0 ?
                                    <div className="col">
                                    <button onClick={
                                        ()=>{
                                            this.closeTodo();
                                        }
                                    } className="btn btn-success">Cloture</button>
                                </div>
                                :
                                <div></div>
                                }
                                <div className="col">
                                    <button onClick={
                                        () => {
                                            this.setState({
                                                isEditing: true
                                            })
                                        }
                                    } className="btn btn-secondary">Edit</button>
                                </div>
                                <div className="col">
                                    <button onClick={
                                        ()=>{
                                           if ( window.confirm("do you really wanna delete this todo ?")) {
                                               this.deleteTodo();
                                           }
                                        }
                                    } className="btn btn-danger">Delete</button>
                                </div>

                            </div>
                        </div>
                }



            </div>
        );
    }
}

export default TodoListItem;