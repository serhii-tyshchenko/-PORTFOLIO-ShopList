import React from 'react';
import PropTypes from 'prop-types';
import { UICheckbox } from 'modules/ui';

import './ShoppingListItem.scss';

const ShoppingListItem = (props) => {
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
      <UICheckbox onChange={onRemoveClick} />
    </li>
  );
};

ShoppingListItem.propTypes = {
  data: PropTypes.shape.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export { ShoppingListItem };
