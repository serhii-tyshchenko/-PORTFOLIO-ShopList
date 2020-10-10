import React, { useContext } from 'react';
import { Localization } from 'contexts';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  updateItem,
  addItem,
  addSuggestion,
  updateSuggestion,
  hideModal,
} from 'store/actions';
import { UIModal } from 'modules/ui';
import { SuggestionListContainer } from 'modules/data';
import { ShoppingList } from '../components';

const isItemExists = (arr, value) => arr.some((item) => item.title.toUpperCase() === value.toUpperCase());

const ShoppingListContainer = () => {
  const dispatch = useDispatch();
  const {
    data, suggestions, user: { uid }, modals: { sugg },
  } = useSelector((state) => state);
  const STR = useContext(Localization);

  function handleAddClick(title) {
    if (!isItemExists(data, title)) {
      const newItem = {
        id: uuidv4(),
        title,
        isCompleted: false,
      };
      dispatch(addItem(uid, newItem));
      if (!isItemExists(suggestions, title)) {
        dispatch(
          addSuggestion(uid, {
            id: newItem.id,
            title,
            inList: true,
          }),
        );
      }
    }
  }
  function handleCompleteClick(evt) {
    const { id } = evt.target.closest('li');
    const isCompleted = evt.target.checked;
    dispatch(updateItem(uid, { id, isCompleted }));
  }
  function handleBlur(evt) {
    const { id } = evt.target.closest('li');
    const title = evt.target.value;
    dispatch(updateItem(uid, { id, title }));
  }
  function handleRemoveClick(evt) {
    const { id } = evt.target.closest('li');
    // TODO improve selection logic
    const title = evt.target.closest('label').previousSibling.value;
    dispatch(removeItem(uid, id));
    const sugItem = suggestions.find((item) => item.title === title);
    dispatch(updateSuggestion(uid, { id: sugItem.id, inList: false }));
  }
  function handleModalClose() {
    dispatch(hideModal({ modalName: 'sugg', data: null }));
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
      <UIModal isVisible={sugg.isVisible} onClose={handleModalClose} title={STR.FAVORITES_LIST}>
        <SuggestionListContainer />
      </UIModal>
    </>
  );
};

export { ShoppingListContainer };
