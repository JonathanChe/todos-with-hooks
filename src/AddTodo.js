import React, { useState } from 'react';

let nextTodoId = 0;

const initialState = () => ({
  name: '',
  completed: false,
  id: nextTodoId,
});

const AddTodo = ({ dispatch }) => {
  const [state, setState] = useState(initialState());

  const handleChange = e => {
    let input = e.target.value;

    setState(prevState => ({ ...prevState, name: input }));
  };

  const submitTodo = () => {
    dispatch({ type: "ADD_TODO", todo: {
      ...state,
      id: nextTodoId++,
    }});
    setState(initialState());
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={e => handleChange(e)}
      />
      <button
        onClick={() => submitTodo()}
      >
        Add Todo
      </button>
    </div>
  )
};

export default AddTodo;
