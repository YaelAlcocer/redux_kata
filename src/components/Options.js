import React from "react";
import Option from "../containers/Option";
import { VisibilityFilters } from "../actions";

const Options = () => (
  <div>
    <Option filter={VisibilityFilters.SHOW_ALL}>All</Option>
    <Option filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Option>
    <Option filter={VisibilityFilters.SHOW_ACTIVE}>Active</Option>
  </div>
);

export default Options;
