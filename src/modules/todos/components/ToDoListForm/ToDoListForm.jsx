import React, { useState } from 'react';
import { UIButton, UIInput } from 'modules/ui';
import './ToDoListForm.scss';

const ToDoListForm = (props) => {
  const { onSubmit, STR } = props;
  const [todoTitle, setTodoTitle] = useState('');
  function handleTodoChange(evt) {
    setTodoTitle(evt.target.value);
  }
  function handleSubmit(evt) {
    if (todoTitle) {
      evt.preventDefault();
      onSubmit(todoTitle);
      setTodoTitle('');
    }
  }
  return (
    <form className="todo-list__form" onSubmit={handleSubmit}>
      <UIInput
        extraClassName="todo-list__form-input"
        value={todoTitle}
        onChange={handleTodoChange}
        required
      />
      <UIButton type="submit" btnType="primary" text={STR.ADD_TODO} onClick={handleSubmit} />
    </form>
  );
};

export { ToDoListForm };
