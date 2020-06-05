import React, { useState } from 'react';
import { UIIconButton, UIInput } from 'modules/ui';
import './ShoppingListForm.scss';

const ShoppingListForm = (props) => {
  const { onSubmit } = props;
  const [itemTitle, setItemTitle] = useState('');
  function handleItemChange(evt) {
    setItemTitle(evt.target.value);
  }
  function handleSubmit(evt) {
    if (itemTitle) {
      evt.preventDefault();
      onSubmit(itemTitle);
      setItemTitle('');
    }
  }
  return (
    <form className="shopping-list__form" onSubmit={handleSubmit}>
      <UIInput
        extraClassName="shopping-list__form-input"
        value={itemTitle}
        onChange={handleItemChange}
        required
      />
      <UIIconButton type="submit" extraClassName="shopping-list__form-btn" icon="plus" onClick={handleSubmit} />
    </form>
  );
};

export { ShoppingListForm };
