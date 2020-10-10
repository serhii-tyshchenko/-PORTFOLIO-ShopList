import React from 'react';
import PropTypes from 'prop-types';
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

SuggestionList.propTypes = {
  data: PropTypes.shape.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export { SuggestionList };
