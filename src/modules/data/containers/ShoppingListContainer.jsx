import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem, updateItem, addItem, addSuggestion, updateSuggestion,
} from 'store/actions';
import { getStrings } from 'assets/localization';
import { ShoppingList } from '../components';

const itemAlreadyExist = (arr, value) => arr.some((el) => el.title.toUpperCase() === value.toUpperCase());

const ShoppingListContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.uid);
  const data = useSelector((state) => state.data);
  const suggestions = useSelector((state) => state.suggestions);
  const { language } = useSelector((state) => state.settings);
  const STR = getStrings(language);

  function handleAddClick(title) {
    if (!itemAlreadyExist(data, title)) {
      const newItem = {
        id: uuidv4(),
        title,
        isCompleted: false,
      };
      dispatch(addItem(userId, newItem));
      if (!itemAlreadyExist(suggestions, title)) {
        dispatch(addSuggestion(userId, { id: newItem.id, title, inList: true }));
      }
    }
  }
  function handleCompleteClick(evt) {
    const { id } = evt.target.closest('li');
    const isCompleted = evt.target.checked;
    dispatch(updateItem(userId, { id, isCompleted }));
  }
  function handleBlur(evt) {
    const { id } = evt.target.closest('li');
    const title = evt.target.value;
    dispatch(updateItem(userId, { id, title }));
  }
  function handleRemoveClick(evt) {
    const { id } = evt.target.closest('li');
    const title = evt.target.previousSibling.value;
    dispatch(removeItem(userId, id));
    const sugItem = suggestions.find((item) => item.title === title);
    dispatch(updateSuggestion(userId, { id: sugItem.id, inList: false }));
  }

  return (
    <>
      <ShoppingList
        data={data}
        onCompleteClick={handleCompleteClick}
        onRemoveClick={handleRemoveClick}
        onAddClick={handleAddClick}
        onBlur={handleBlur}
        STR={STR}
      />
    </>
  );
};

export { ShoppingListContainer };
