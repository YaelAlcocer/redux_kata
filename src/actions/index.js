let todoId = 0;

export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: {
    id: todoId++,
    text,
  },
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
