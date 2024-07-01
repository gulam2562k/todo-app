import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export default function Input(props) {
    let [todo, setTodo] = useState("")
    let [error, setError] = useState(false);

    const inputChange = (event) => {
        setTodo(event.target.value);

        if(event.target.value) {
            setError(false)
        }else {
            setError(true)
        }
    }

    const submit = (event) => {
        event.preventDefault();

        if(todo) {
            if(props.editData.index === -1) {
                props.addTodo(todo)
            }else {
                props.updateTodo(props.editData.index, todo)
            }

            setTodo("")
        }else {
            setError(true)
            toast.error("Please enter todo")
        }
    }

    useEffect(() => {
        setTodo(props.editData.data);
    },[props.editData.data, props.editData.index])

    return (
        <section>
            <form onSubmit={submit} noValidate>
                <div className="row">
                    <div className="col-10">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter todo"
                            value={todo}
                            onChange={inputChange}
                        />
                        {
                            error && <p className='text-danger'>
                                Please enter todo
                            </p>
                        }
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary">
                            {
                                props.editData.index === -1 ? "Add" : "Update"
                            }
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}
