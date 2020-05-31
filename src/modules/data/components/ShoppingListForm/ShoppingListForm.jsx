import React, { useState } from 'react';
import { UIButton, UIInput } from 'modules/ui';
import './ShoppingListForm.scss';

const ShoppingListForm = (props) => {
  const { onSubmit, STR } = props;
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
      <UIButton type="submit" btnType="primary" text={STR.ADD_ITEM} onClick={handleSubmit} />
    </form>
  );
};

export { ShoppingListForm };
