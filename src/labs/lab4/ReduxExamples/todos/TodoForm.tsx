import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export const TodoForm = () => {
    const { todo } = useSelector((state: any) => state.todosReducer)
    const dispatch = useDispatch()
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <input className="form-control flex-grow-1 me-2"
                value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
            <div className="d-flex">
                <button onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click"
                    className="btn btn-warning me-2"> Update </button>
                <button onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click"
                    className="btn btn-success"> Add </button>
            </div>
        </li>
    );
}
