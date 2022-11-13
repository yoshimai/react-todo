import React from "react";

export const CompleteTodos = (props) => {
  const { Todos, onClickBack, disabled } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {Todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button disabled={disabled} onClick={() => onClickBack(index)}>
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
