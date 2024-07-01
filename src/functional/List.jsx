import React from 'react'


export default function List(props) {
    return (
        <section className="mt-5">
            <ul className="list-group">
                {
                    props.todos.length > 0 ? props.todos.map((value, index) => (
                        <li className="list-group-item d-flex justify-content-between" key={index}>
                            <div>
                                {value}
                            </div>
                            <div>
                                <button 
                                    className='btn btn-warning btn-sm me-2' 
                                    onClick={() => props.editTodo(index, value)}
                                    disabled={props.editData.index === -1 ? false : true}
                                >
                                    Edit
                                </button>
                                <button 
                                    className='btn btn-danger btn-sm' 
                                    onClick={() => props.deleteTodo(value)}
                                    disabled={props.editData.index === -1 ? false : true}
                                    >
                                        Delete
                                </button>
                            </div>
                        </li>
                    )) : <li className="list-group-item">No Todo</li>
                }
            </ul>
        </section>
    )
}

// {
//     props.todos.length > 0 ? props.todos.map((value, index) => {
//         return  <li className="list-group-item" key={index}>{value}</li>
//     }) :
//     <li className="list-group-item">No Todo</li>
// }
























