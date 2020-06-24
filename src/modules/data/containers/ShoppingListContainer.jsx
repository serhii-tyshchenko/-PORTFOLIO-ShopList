import React, { useState, useContext } from 'react';
import { Localization } from 'contexts';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  updateItem,
  addItem,
  addSuggestion,
  updateSuggestion,
} from 'store/actions';
import { UIModal } from 'modules/ui';
import { SuggestionListContainer } from 'modules/data';
import { ShoppingList } from '../components';

const isItemExists = (arr, value) => arr.some((item) => item.title.toUpperCase() === value.toUpperCase());

const ShoppingListContainer = () => {
  const dispatch = useDispatch();
  // const uid = useSelector((state) => state.user.uid);
  const {
    data, suggestions, user: { uid },
  } = useSelector((state) => state);
  const STR = useContext(Localization);
  const [isModalVisible, setModalVisible] = useState(false);

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
    const title = evt.target.previousSibling.value;
    dispatch(removeItem(uid, id));
    const sugItem = suggestions.find((item) => item.title === title);
    dispatch(updateSuggestion(uid, { id: sugItem.id, inList: false }));
  }
  function handleFavClick() {
    setModalVisible(true);
  }
  function handleModalClose() {
    setModalVisible(false);
  }

  return (
    <>
      <ShoppingList
        data={data}
        onCompleteClick={handleCompleteClick}
        onRemoveClick={handleRemoveClick}
        onAddClick={handleAddClick}
        onFavClick={handleFavClick}
        onBlur={handleBlur}
        STR={STR}
      />
      <UIModal isVisible={isModalVisible} onClose={handleModalClose} title={STR.SUGGESTION_LIST}>
        <SuggestionListContainer />
      </UIModal>
    </>
  );
};

export { ShoppingListContainer };
