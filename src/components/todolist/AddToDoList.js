import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import shortid from 'shortid';
import { addTodoList } from '../../actions/contactAction';

const AddToDoList = () => {
    const [todolistName, settodolistName] = useState("");
    const dispath = useDispatch();
    let history = useHistory();

    const createToDoList = (e) => {
        e.preventDefault();
        const add = {
            id: shortid.generate(),
            todolistName: todolistName
        }
        dispath(addTodoList(add));
        history.push("/contacts/todolist");
    }

    const enabled = todolistName.length > 0;

    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Add ToDo List Item
                </div>
            <div className="card-body">
                <form onSubmit={(e) => createToDoList(e)}>

                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter a Todolist item name"
                                    value={todolistName}
                                    onChange={(e) => settodolistName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-4">
                            <Link to="/contacts/todolist" className="btn btn-light border mr-2">
                                Cancel
                            </Link>
                            <button className="btn btn-primary" type="submit" disabled={!enabled}>
                                Create
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddToDoList;