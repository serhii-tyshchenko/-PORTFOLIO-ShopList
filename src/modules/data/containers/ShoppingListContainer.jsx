import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateItem, addItem } from 'store/actions';
import { getStrings } from 'assets/localization';
import { ShoppingList } from '../components';

const ShoppingListContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.uid);
  const data = useSelector((state) => state.data);
  const { language } = useSelector((state) => state.settings);
  const STR = getStrings(language);

  function handleAddItemClick(title) {
    const newItem = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };
    dispatch(addItem(userId, newItem));
  }
  function handleCompleteClick(evt) {
    const { id } = evt.target.closest('li');
    const isCompleted = evt.target.checked;
    dispatch(updateItem(userId, { id, isCompleted }));
  }
  function handleEditClick(evt) {
    const { id } = evt.target.closest('li');
  }
  function handleRemoveClick(evt) {
    const { id } = evt.target.closest('li');
    dispatch(removeItem(userId, id));
  }

  return (
    <>
      <ShoppingList
        data={data}
        onCompleteClick={handleCompleteClick}
        onRemoveClick={handleRemoveClick}
        onAddItemClick={handleAddItemClick}
        onEditClick={handleEditClick}
        STR={STR}
      />
    </>
  );
};

export { ShoppingListContainer };
