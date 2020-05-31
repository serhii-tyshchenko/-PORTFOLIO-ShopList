import React from 'react';
import { UIIconButton } from 'modules/ui';
import './ToDoListItem.scss';

const ToDoListItem = (props) => {
  const {
    data: { id, title, isCompleted },
    onCompleteClick,
    onRemoveClick,
    onEditClick,
  } = props;

  return (
    <li id={id} className="todo-list__item">
      <input
        type="checkbox"
        className="todo-list__item-cb"
        checked={isCompleted}
        onChange={onCompleteClick}
      />
      <span className="todo-list__item-title">{title}</span>
      <UIIconButton id={id} icon="pencil" onClick={onEditClick} />
      <UIIconButton id={id} icon="trash" onClick={onRemoveClick} />
    </li>
  );
};

export { ToDoListItem };
