import React from 'react';
import { UIIconButton } from 'modules/ui';
import './SuggestionListItem.scss';

const SuggestionListItem = (props) => {
  const {
    data: { id, title },
    onRemoveClick,
    onAddClick,
    onBlur,
  } = props;

  return (
    <li id={id} className="suggestion-list-item">
      <UIIconButton
        id={id}
        extraClassName="suggestion-list-item__btn-add"
        icon="plus"
        onClick={onAddClick}
      />
      <input
        type="text"
        className="suggestion-list-item__title"
        defaultValue={title}
        onBlur={onBlur}
        maxLength="50"
      />
      <UIIconButton id={id} icon="trash" onClick={onRemoveClick} />
    </li>
  );
};

export { SuggestionListItem };
