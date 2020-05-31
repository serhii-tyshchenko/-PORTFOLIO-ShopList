import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem, updateItem, addItem, showModal,
} from 'store/actions';
import { getStrings } from 'assets/localization';
import { ToDoList } from '../components';
import { ToDoModalContainer } from '.';

const ToDoListContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.uid);
  const isVisible = useSelector((state) => state.modals.todo.isVisible);
  const data = useSelector((state) => state.data);
  const { language } = useSelector((state) => state.settings);
  const STR = getStrings(language);

  function handleAddTodoClick(title) {
    const newTodo = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };
    dispatch(addItem(userId, newTodo));
  }
  function handleCompleteClick(evt) {
    const { id } = evt.target.closest('li');
    const isCompleted = evt.target.checked;
    dispatch(updateItem(userId, { id, isCompleted }));
  }
  function handleEditClick(evt) {
    const { id } = evt.target.closest('li');
    dispatch(showModal({ modalName: 'todo', data: { type: 'edit', id } }));
  }
  function handleRemoveClick(evt) {
    const { id } = evt.target.closest('li');
    dispatch(removeItem(userId, id));
  }

  return (
    <>
      <ToDoList
        data={data}
        onCompleteClick={handleCompleteClick}
        onRemoveClick={handleRemoveClick}
        onAddTodoClick={handleAddTodoClick}
        onEditClick={handleEditClick}
        STR={STR}
      />
      <ToDoModalContainer />
    </>
  );
};

export { ToDoListContainer };
