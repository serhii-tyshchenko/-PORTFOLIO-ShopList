import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeSuggestion, updateSuggestion } from 'store/actions';
import { SuggestionList } from '../components';

const SuggestionListContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.uid);
  const data = useSelector((state) => state.suggestions);

  function handleAddClick(evt) {
    const title = evt.target.nextSibling.value;
    const newItem = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };
    dispatch(addItem(userId, newItem));
  }
  function handleBlur(evt) {
    const { id } = evt.target.closest('li');
    const title = evt.target.value;
    dispatch(updateSuggestion(userId, { id, title }));
  }
  function handleRemoveClick(evt) {
    const { id } = evt.target.closest('li');
    dispatch(removeSuggestion(userId, id));
  }

  return (
    <>
      <SuggestionList
        data={data}
        onRemoveClick={handleRemoveClick}
        onAddClick={handleAddClick}
        onBlur={handleBlur}
      />
    </>
  );
};

export { SuggestionListContainer };
