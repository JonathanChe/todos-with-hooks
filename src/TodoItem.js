import React from 'react';

const TodoItem = ({
  handleRemove,
  handleClick,
  completed,
  name
}) => (
  <li
    onClick={handleClick}
    onDoubleClick={handleRemove}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {name}
  </li>
);

export default TodoItem;
