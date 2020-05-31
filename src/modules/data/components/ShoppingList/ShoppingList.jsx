import React from 'react';
import { ShoppingListItem, ShoppingListForm } from 'modules/data';
import './ShoppingList.scss';

const ShoppingList = ({
  data,
  onCompleteClick,
  onRemoveClick,
  onEditClick,
  onAddItemClick,
  STR,
}) => (
  <div className="shopping-list">
    <ShoppingListForm onSubmit={onAddItemClick} STR={STR} />
    <ul className="shopping-list__list">
      {data.map((item) => (
        <ShoppingListItem
          key={item.id}
          data={item}
          onCompleteClick={onCompleteClick}
          onRemoveClick={onRemoveClick}
          onEditClick={onEditClick}
        />
      ))}
    </ul>
  </div>
);

export { ShoppingList };
