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
    <li id={id} className="suggestion-list__item">
      <UIIconButton
        id={id}
        extraClassName="suggestion-list__item-add"
        icon="plus"
        onClick={onAddClick}
      />
      <input
        type="text"
        className="suggestion-list__item-title"
        defaultValue={title}
        onBlur={onBlur}
        maxLength="50"
      />
      <UIIconButton id={id} icon="cancel" onClick={onRemoveClick} />
    </li>
  );
};

export { SuggestionListItem };
