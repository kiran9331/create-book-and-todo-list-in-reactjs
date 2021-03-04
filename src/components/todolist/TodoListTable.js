import React from 'react';
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteToDoList } from '../../actions/contactAction';

const TodoListTable = ({ todolist }) => {
    const dispatch = useDispatch();
    const { todolistName, id } = todolist;

    return (
        <tr>
            <td>
                <Avatar className="mr-2" name={todolistName} size="45" round={true} /> {todolistName}
            </td>
            <td>
                <Link to={`/todolist/edittodolist/${id}`}>
                    <span className="material-icons mr-2 cursor-pointer">edit</span>
                </Link>

                <span className="material-icons text-danger cursor-pointer" onClick={() => dispatch(deleteToDoList(id))}>
                    remove_circle
                 </span>
            </td>
        </tr>
    );
}

export default TodoListTable;