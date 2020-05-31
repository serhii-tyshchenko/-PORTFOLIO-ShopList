import React from 'react';
import PropTypes from 'prop-types';
import './UIIconButton.scss';

const UIIconButton = (props) => {
  const {
    icon, children, onClick, extraClassName,
  } = props;
  const buttonClassName = `ui-icon-button icon-${icon} ${extraClassName}`;

  return (
    <button type="button" className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

UIIconButton.defaultProps = {
  icon: '',
  extraClassName: '',
  onClick: null,
  children: null,
};

UIIconButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  extraClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export { UIIconButton };
