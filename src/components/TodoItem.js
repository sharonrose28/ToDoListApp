// TodoItem.js
import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-text" onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
