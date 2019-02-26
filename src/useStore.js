import useTodoList from './reducer';
import useVisibilityFilter from './useVisibilityFilter';

const useStore = () => {
  const [todos, changeTodos] = useTodoList();
  const [filter, changeFilter] = useVisibilityFilter();

  const state = { todos, filter };

  const reducers = { changeFilter, changeTodos };

  return [state, reducers];
};

export default useStore;
