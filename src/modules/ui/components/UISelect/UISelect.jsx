import React from 'react';
import PropTypes from 'prop-types';
import './UISelect.scss';

const UISelect = (props) => {
  const {
    value, onChange, options, extraClassName,
  } = props;
  const className = extraClassName ? `ui-select ${extraClassName}` : 'ui-select';

  return (
    <select onChange={onChange} value={value} className={className}>
      {options.map((option) => (
        <option key={option.value} value={option.value} className="ui-select__option">
          {option.label}
        </option>
      ))}
    </select>
  );
};

UISelect.defaultProps = {
  extraClassName: '',
  onChange: null,
  value: '',
  options: [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
  ],
};

UISelect.propTypes = {
  extraClassName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
};

export { UISelect };
