import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ dispatch, todos, filter }) => {

  const visibleTodos = (list, filter) => {
    switch(filter) {
      case "ALL":
        return list;
      case "COMPLETED":
        return list.filter(t => t.completed);
      case "ACTIVE":
        return list.filter(t => !t.completed);
      default:
        return list;
    }
  }

  const todoList = t => {
    return t.map(todo => (
      <TodoItem
        key={todo.id}
        handleClick={() => dispatch({
          type: "TOGGLE_TODO",
          id: todo.id,
        })}
        handleRemove={() => dispatch({
          type: "REMOVE_TODO",
          id: todo.id,
        })}
        {...todo}
      />
    ))
  };

  return (
    <div style={{ padding: "20px"}}>
      {todos.length > 0 ? todoList(visibleTodos(todos, filter)) : "No Todos"}
    </div>
  )
}

export default TodoList;
