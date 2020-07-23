import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = (props) => {
  let input;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    props.dispatch(addTodo(input.value));
    input.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={(el) => (input = el)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
