import React, { useState } from 'react';
import { UIInput, UIIconButton } from 'modules/ui';
import './ShoppingListForm.scss';

const ShoppingListForm = (props) => {
  const { onSubmit, onFavClick } = props;
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
  function handleFavClick() {
    onFavClick();
  }
  return (
    <form className="shopping-list__form" onSubmit={handleSubmit}>
      <UIInput
        extraClassName="shopping-list__form-input"
        value={itemTitle}
        onChange={handleItemChange}
        required
      />
      <UIIconButton icon="star" type="button" extraClassName="shopping-list__form-btn" onClick={handleFavClick} />
    </form>
  );
};

export { ShoppingListForm };
