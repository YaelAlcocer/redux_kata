import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import {
  VisibilityFilters,
  toggleTodo,
  deleteTodo,
  resetList,
} from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    default:
      throw new Error("Hey! Error!: " + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  resetList: () => dispatch(resetList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
