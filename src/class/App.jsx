import React, { Component } from 'react'
import Input from './Input'
import List from './List'
import toast, { Toaster } from 'react-hot-toast';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            todos: ["breakfast", "lunch", "snacks", "dinner"],
            editData: {
                index: -1,
                data: ''
            }
        }
    }

    addTodo = (value) => {
        this.setState({
            todos: [...this.state.todos, value]
        })

        toast.success("Todos added successfully")
    }

    deleteTodo = (value) => {
        let filterTodos = this.state.todos.filter((todo) => todo !== value);

        this.setState({todos: [...filterTodos]})

        toast.success("Todo deleted successfully")
    }

    editTodo = (index, data) => {
        this.setState({
            editData: {
                index, 
                data
            }    
        })
    }

    updateTodo = (index, data) => {
        this.state.todos.splice(index, 1, data)
       
        this.setState({
            todos: [...this.state.todos],
            editData: {
                index: -1,
                data: ''
            }
        })

        toast.success("Todos updated successfully")
    }

    render() {
        return (
            <div className="container mt-5">
                <Input addTodo={this.addTodo} editData={this.state.editData} updateTodo={this.updateTodo} />
                <List todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/>
                <Toaster />
            </div>
        )
    }
}
