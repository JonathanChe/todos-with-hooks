import { useReducer } from 'react';

const intialState = () => [];

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "TOGGLE_TODO":
      return state.map(todo => {
        return todo.id === action.id
          ? { ...todo, completed: true }
          : todo;
      });
    case "REMOVE_TODO":
      return state.filter(todo => !(todo.id === action.id));
    default:
      return state;
  }
}

const useTodoList = () => {
  const [todos, dispatch] = useReducer(reducer, intialState());
  return [todos, dispatch];
}

export default useTodoList;
