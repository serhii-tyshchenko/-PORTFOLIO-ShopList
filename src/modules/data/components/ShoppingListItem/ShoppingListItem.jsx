import React from 'react';
import { UIIconButton } from 'modules/ui';
import './ShoppingListItem.scss';

const ShoppingListItem = (props) => {
  const {
    data: { id, title, isCompleted },
    onCompleteClick,
    onRemoveClick,
  } = props;

  return (
    <li id={id} className="shopping-list__item">
      <input
        type="checkbox"
        className="shopping-list__item-cb"
        checked={isCompleted}
        onChange={onCompleteClick}
      />
      <span className="shopping-list__item-title">{title}</span>
      <UIIconButton id={id} icon="trash" onClick={onRemoveClick} />
    </li>
  );
};

export { ShoppingListItem };
