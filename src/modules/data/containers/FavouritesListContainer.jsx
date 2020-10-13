import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateItem, removeItem } from 'store/actions';
import { sortByABC } from 'assets/utils';
import { FavouritesList } from '../components';

const FavouritesListContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.uid);
  const data = useSelector((state) => state.data
    .filter((item) => item.inList !== true)
    .sort((a, b) => sortByABC(a.title, b.title)));

  function handleAddClick(evt) {
    const { id } = evt.target.closest('li');
    dispatch(updateItem(userId, { id, inList: true }));
  }
  function handleBlur(evt) {
    const { id } = evt.target.closest('li');
    const title = evt.target.value;
    dispatch(updateItem(userId, { id, title }));
  }
  function handleRemoveClick(evt) {
    const { id } = evt.target.closest('li');
    dispatch(removeItem(userId, id));
  }

  return (
    <>
      <FavouritesList
        data={data}
        onRemoveClick={handleRemoveClick}
        onAddClick={handleAddClick}
        onBlur={handleBlur}
      />
    </>
  );
};

export { FavouritesListContainer };
