import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { UIInput, UIIconButton } from 'modules/ui';
import './ShoppingListForm.scss';

const ShoppingListForm = (props) => {
  const { onSubmit } = props;
  const [itemTitle, setItemTitle] = useState('');
  function handleItemChange(evt) {
    setItemTitle(evt.target.value);
  }
  function handleSubmit(evt) {
    if (!itemTitle) {
      return;
    }
    evt.preventDefault();
    onSubmit(itemTitle);
    setItemTitle('');
  }

  return (
    <form className="shopping-list__form" onSubmit={handleSubmit}>
      <UIInput
        extraClassName="shopping-list__form-input"
        value={itemTitle}
        onChange={handleItemChange}
        required
      />
      <UIIconButton icon="plus" type="submit" extraClassName="shopping-list__form-btn" onClick={handleSubmit} />
    </form>
  );
};

ShoppingListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { ShoppingListForm };
