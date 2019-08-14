import React, { Component } from 'react';
import axios from 'axios';


class CreateTask extends Component {

    constructor(props){
        super(props);

        this.onChangeTodoTask = this.onChangeTodoTask.bind(this);
        this.onChangeTodoPerson = this.onChangeTodoPerson.bind(this);
        this.onChangeTodoTimePlace = this.onChangeTodoTimePlace.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_task: "",
            todo_person: "",
            todo_timeplace: "",
            todo_priority: "",
            todo_completed: false
        }
    }
    onChangeTodoTask(e){
        this.setState({
            todo_task: e.target.value
        })
    }

    onChangeTodoPerson(e){
        this.setState({
            todo_person: e.target.value
        })
    }
    
    onChangeTodoTimePlace(e){
        this.setState({
            todo_timeplace: e.target.value
        })
    }

    onChangeTodoPriority(e){
        this.setState({
            todo_priority: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const newTodo  = {
            todo_task: this.state.todo_task,
            todo_person: this.state.todo_person,
            todo_timeplace: this.state.todo_timeplace,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }
        axios.post('http://localhost:8000/todolist/add', newTodo)
        .then(res => console.log(res.data));

        this.setState = {
            todo_task: "",
            todo_person: "",
            todo_timeplace: "",
            todo_priority: "",
            todo_completed: false
        }
    }




    render() {
        return (
            <div style={{marginTop: 30}}>
                <h2>Create Daily Task</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Task: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.todo_task}
                        onChange = {this.onChangeTodoTask}
                        />
                    </div>

                    <div>
                    <label>Person: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.todo_person}
                        onChange = {this.onChangeTodoPerson}
                        />
                    </div>

                    <div>
                    <label>Time & Place: </label>
                        <input type="text"
                        className="form-control"
                        value={this.state.todo_timeplace}
                        onChange = {this.onChangeTodoTimePlace}
                        />
                    </div>

                    <div className="form-group">
                        <div className=" form-check form-check-inline">
                            <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityLow"
                            value="Low"
                            checked={this.state.todo_priority==='Low'}
                            onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>

                        <div className=" form-check form-check-inline">
                            <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityMedium"
                            value="Medium"
                            checked={this.state.todo_priority==='Medium'}
                            onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>

                        <div className=" form-check form-check-inline">
                            <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityHigh"
                            value="High"
                            checked={this.state.todo_priority==='High'}
                            onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <br/>

                    <div className="form-group">
                        <input type="submit" value="Create Task" className="btn btn-danger"/>
                    </div>
                </form>
                 
            </div>
        );
    }
}

export default CreateTask;