import React from 'react';
import PropTypes from 'prop-types';
import './UIInput.scss';

const UIInput = (props) => {
  const {
    type, value, onChange, extraClassName, ...rest
  } = props;
  const className = extraClassName ? `ui-input ${extraClassName}` : 'ui-input';

  return <input type={type} onChange={onChange} value={value} className={className} {...rest} />;
};

UIInput.defaultProps = {
  extraClassName: '',
  onChange: null,
  value: '',
  type: 'text',
};

UIInput.propTypes = {
  extraClassName: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
};

export { UIInput };
