import React from 'react';
import useStore from './useStore';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';

const App = () => {
  const [{ todos, filter }, { changeFilter, changeTodos }] = useStore();

  return (
    <div>
      <h1>Todo List</h1>
      <p>
        Add a todo to the list. Click it to complete. Double click to remove.
      </p>
      <Filter filter={filter} changeFilter={changeFilter} />
      <AddTodo dispatch={changeTodos} />
      <TodoList dispatch={changeTodos} todos={todos} filter={filter}/>
    </div>
  )
}

export default App;
