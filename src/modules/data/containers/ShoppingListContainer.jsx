import React, { useContext } from 'react';
import { Localization } from 'contexts';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateItem,
  addItem,
  hideModal,
} from 'store/actions';
import { UIModal } from 'modules/ui';
import { FavouritesListContainer } from 'modules/data';
import { ShoppingList } from '../components';

// const isItemExists = (arr, value) => arr.some((item) => item.title.toUpperCase() === value.toUpperCase());

const ShoppingListContainer = () => {
  const dispatch = useDispatch();
  const {
    user: { uid }, modals,
  } = useSelector((state) => state);
  const data = useSelector((state) => state.data.filter((item) => item.inList === true));
  const STR = useContext(Localization);

  function handleAddClick(title) {
    dispatch(addItem(uid, { id: uuidv4(), title, inList: true }));
  }

  function handleCompleteClick(evt) {
    const { id } = evt.target.closest('li');
    dispatch(updateItem(uid, { id, inList: false }));
  }
  function handleBlur(evt) {
    const { id } = evt.target.closest('li');
    const title = evt.target.value;
    dispatch(updateItem(uid, { id, title }));
  }
  function handleModalClose() {
    dispatch(hideModal({ modalName: 'fav', data: null }));
  }

  return (
    <>
      <ShoppingList
        data={data}
        onCompleteClick={handleCompleteClick}
        onAddClick={handleAddClick}
        onBlur={handleBlur}
        STR={STR}
      />
      <UIModal
        isVisible={modals.fav.isVisible}
        onClose={handleModalClose}
        title={STR.FAVORITES_LIST}
      >
        <FavouritesListContainer />
      </UIModal>
    </>
  );
};

export { ShoppingListContainer };
