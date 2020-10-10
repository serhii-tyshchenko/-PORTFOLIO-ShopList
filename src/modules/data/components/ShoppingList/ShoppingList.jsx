import React from 'react';
import { ShoppingListItem } from './ShoppingListItem';
import { ShoppingListForm } from './ShoppingListForm';
import './ShoppingList.scss';

const ShoppingList = (props) => {
  const {
    data, onCompleteClick, onRemoveClick, onBlur, onAddClick, onFavClick, STR,
  } = props;

  return (
    <div className="shopping-list">
      <ShoppingListForm onSubmit={onAddClick} onFavClick={onFavClick} STR={STR} />
      <ul className="shopping-list__list">
        {data.map((item) => (
          <ShoppingListItem
            key={item.id}
            data={item}
            onCompleteClick={onCompleteClick}
            onRemoveClick={onRemoveClick}
            onBlur={onBlur}
          />
        ))}
      </ul>
    </div>
  );
};

export { ShoppingList };
