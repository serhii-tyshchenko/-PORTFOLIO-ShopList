import React from 'react';
import { UIIconButton } from 'modules/ui';
import './ShoppingListItem.scss';

const ShoppingListItem = (props) => {
  const {
    data: { id, title, isCompleted },
    onCompleteClick,
    onRemoveClick,
    onBlur,
  } = props;

  return (
    <li id={id} className="shopping-list__item">
      <input
        type="checkbox"
        className="shopping-list__item-cb"
        checked={isCompleted}
        onChange={onCompleteClick}
      />
      <input
        type="text"
        className="shopping-list__item-title"
        defaultValue={title}
        onBlur={onBlur}
        maxLength="50"
        disabled
      />
      <UIIconButton id={id} icon="cancel" onClick={onRemoveClick} />
    </li>
  );
};

export { ShoppingListItem };
