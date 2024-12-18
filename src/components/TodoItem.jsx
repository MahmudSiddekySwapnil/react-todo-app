
function TodoItem({ todo, removeTodo }) {
    return (
        <li>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
    );
}

export default TodoItem;
