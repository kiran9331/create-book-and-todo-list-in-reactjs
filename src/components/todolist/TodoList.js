import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TodoListTable from './TodoListTable';

const TodoList = () => {

    const todolist = useSelector((statetodolist) => statetodolist.todolistR.todolists);

    return (
        <div>
            <Link to="/todolist/addtodolist" className="btn btn-light float-right mb-2 border-0">Add Todo List</Link>
            <table className="table shadow">
                <thead className="bg-light text-black">
                    <tr>
                        <th>Todo List Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todolist.length > 0
                            ?
                            todolist.map((todolist) => (
                                <TodoListTable todolist={todolist} key={todolist.id} />
                            ))
                            :
                            <tr><td colSpan="4" className="text-center">No Record Found in <b>ToDo List</b></td></tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TodoList;