import React from 'react';
import PropTypes from 'prop-types';
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

ShoppingList.propTypes = {
  data: PropTypes.shape.isRequired,
  onCompleteClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onFavClick: PropTypes.func.isRequired,
  STR: PropTypes.shape.isRequired,
};

export { ShoppingList };
