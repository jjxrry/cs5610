import { TodoItem } from "./TodoItem";
import todos from "./todos.json"

export const TodoList = () => {
    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {todos.map(todo => {
                    // why explicit return here prof?
                    return (<TodoItem todo={todo} />);
                })}
            </ul><hr />
        </>
    )
}
