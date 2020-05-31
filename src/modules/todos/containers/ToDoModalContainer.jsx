import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { showModal, hideModal, addItem } from 'store/actions';
import { getStrings } from 'assets/localization';
import { ToDoModal } from '../components';

const ToDoModalContainer = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.modals.todo.isVisible);
  const { language } = useSelector((state) => state.settings);
  const STR = getStrings(language);
  function handleClose() {
    dispatch(hideModal({ modalName: 'todo' }));
  }

  return <ToDoModal isVisible={isVisible} STR={STR} onClose={handleClose} />;
};

export { ToDoModalContainer };
