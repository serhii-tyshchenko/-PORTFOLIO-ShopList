import React from 'react';
import './ShoppingListItem.scss';

const ShoppingListItem = (props) => {
  // TODO Add props validation
  const {
    data: { id, title }, onRemoveClick,
  } = props;

  return (
    <li id={id} className="shopping-list-item">
      <input
        type="text"
        className="shopping-list-item__title"
        defaultValue={title}
        maxLength="50"
        disabled
      />
      <input
        id={id}
        type="checkbox"
        className="shopping-list-item__cb"
        onChange={onRemoveClick}
      />
    </li>
  );
};

export { ShoppingListItem };
