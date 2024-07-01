import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

import Input from './Input';
import List from './List';

export default function App() {
    let [todos, setTodos] = useState(["breakfast", "lunch", "snacks", "dinner"])
    let [editData, setEditData] = useState({
        index: -1,
        data: ''
    })

    const addTodo = (value) => {
        setTodos([...todos, value]);

        toast.success("Todos added successfully")
    }

    const deleteTodo = (value) => {
        let filterTodos = todos.filter((todo) => todo !== value);

        setTodos([...filterTodos]);
    }

    const editTodo = (index, data) => {
        setEditData({
            index,
            data
        })
    }

    const updateTodo = (index, data) => {
        todos.splice(index, 1, data)
       
        setTodos([...todos])

        setEditData({
            index: -1,
            data : ""
        })

        toast.success("Todos updated successfully")
    }

    return (
        <div className="container mt-5">
            <Input addTodo={addTodo} editData={editData} updateTodo={updateTodo} />
            <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} editData={editData}/>
            <Toaster />
        </div>
    );
}
