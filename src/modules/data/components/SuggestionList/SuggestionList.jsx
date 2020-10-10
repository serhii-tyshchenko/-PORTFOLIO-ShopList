import React from 'react';
import { SuggestionListItem } from './SuggestionListItem';
import './SuggestionList.scss';

const SuggestionList = (props) => {
  const {
    data, onRemoveClick, onAddClick, onBlur,
  } = props;

  return (
    <ul className="suggestion-list">
      {data.map((item) => (
        <SuggestionListItem
          key={item.id}
          data={item}
          onRemoveClick={onRemoveClick}
          onAddClick={onAddClick}
          onBlur={onBlur}
        />
      ))}
    </ul>
  );
};

export { SuggestionList };
