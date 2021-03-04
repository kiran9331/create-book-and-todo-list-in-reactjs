import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getTodoList, updateToDoList } from '../../actions/contactAction';

const EditToDoList = () => {
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const todolist = useSelector((statetodolist) => statetodolist.todolistR.todolist);
    const [todolistName, settodolistName] = useState("");

    useEffect(() => {
        if (todolist != null) {
            settodolistName(todolist.todolistName);
        }
        dispatch(getTodoList(id));
    }, [todolist]);

    const onupdateToDoList = (e) => {
        e.preventDefault();

        const update_todolist = Object.assign(todolist, {
            todolistName: todolistName
        });

        dispatch(updateToDoList(update_todolist));
        history.push("/contacts/todolist");
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Edit ToDo List Item
            </div>
            <div className="card-body">
                <form onSubmit={(e) => onupdateToDoList(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a Todolist item name"
                            value={todolistName}
                            onChange={(e) => settodolistName(e.target.value)}
                        />
                    </div>
                    <Link to="/contacts/todolist" className="btn btn-light border mr-2">
                        Cancel
                    </Link>
                    <button className="btn btn-warning" type="submit">
                        Update
                    </button>
                </form>
            </div>
        </div>

    );
}

export default EditToDoList;