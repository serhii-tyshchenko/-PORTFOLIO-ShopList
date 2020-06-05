import React from 'react';
import { ShoppingListItem, ShoppingListForm } from 'modules/data';
import './ShoppingList.scss';

const ShoppingList = ({
  data, onCompleteClick, onRemoveClick, onBlur, onAddClick, STR,
}) => (
  <div className="shopping-list">
    <ShoppingListForm onSubmit={onAddClick} STR={STR} />
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

export { ShoppingList };
