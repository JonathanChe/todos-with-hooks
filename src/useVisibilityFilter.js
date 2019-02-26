import { useReducer } from 'react';

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const useVisibilityFilter = () => {
  const [filter, changeFilter] = useReducer(reducer, "ALL");

  return [filter, changeFilter];
}

export default useVisibilityFilter;
