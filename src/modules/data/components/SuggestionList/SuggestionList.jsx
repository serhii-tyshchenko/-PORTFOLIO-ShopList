import React from 'react';
import { SuggestionListItem } from 'modules/data';
import './SuggestionList.scss';

const SuggestionList = ({
  data, onRemoveClick, onAddClick, onBlur,
}) => (
  <div className="suggestion-list">
    <ul className="suggestion-list__list">
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
  </div>
);

export { SuggestionList };
