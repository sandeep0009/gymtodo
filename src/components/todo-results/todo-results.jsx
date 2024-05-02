import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;

  const calculateChecked = () => {
    // Function to calculate completed tasks
    const completedTodos = todos.filter((todo) => todo.completed);
    return completedTodos.length;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
