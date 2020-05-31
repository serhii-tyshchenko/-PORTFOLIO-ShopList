import React from 'react';
import { ToDoListItem, ToDoListForm } from '..';
import './ToDoList.scss';

const ToDoList = ({
  data, onCompleteClick, onRemoveClick, onEditClick, onAddTodoClick, STR,
}) => (
  <div className="todo-list">
    <ToDoListForm onSubmit={onAddTodoClick} STR={STR} />
    <ul className="todo-list__list">
      {data.map((item) => (
        <ToDoListItem
          key={item.id}
          data={item}
          onCompleteClick={onCompleteClick}
          onRemoveClick={onRemoveClick}
          onEditClick={onEditClick}
        />
      ))}
    </ul>
  </div>
);

export { ToDoList };
