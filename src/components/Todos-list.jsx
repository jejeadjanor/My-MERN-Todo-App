import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed':''}>{props.todo.todo_task}</td>
        <td className={props.todo.todo_completed ? 'completed':''}>{props.todo.todo_person}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_timeplace}</td>
        <td className={props.todo.todo_completed ? 'completed':''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Update</Link>
        </td>
    </tr>
)

class Todoslist extends Component {

    constructor(props){
        super(props);
        this.state = {todolist: []};
    }

    componentDidMount(){
         axios.get('http://localhost:8000/todolist/')
        .then(response => {
            this.setState({todolist: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    todoList(){
return this.state.todolist.map((currentTodo, i) => {
            return <Todo todo={currentTodo} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <table className="table table-striped" style={{marginTop: 30}}>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Person</th>
                            <th>Time & Place</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Todoslist;