let todoId = 0;

export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: {
    id: todoId++,
    text,
  },
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});

export const resetList = () => ({
  type: "RESET_LIST",
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});
