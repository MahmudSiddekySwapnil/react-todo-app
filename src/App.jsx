import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
    const [todos, setTodos] = useLocalStorage('todos', []);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoInput addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} />
        </div>
    );
}

export default App;
