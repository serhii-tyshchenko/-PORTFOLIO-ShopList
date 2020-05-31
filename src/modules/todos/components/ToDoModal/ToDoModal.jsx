import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { UIModalConfirm } from 'modules/ui';
import { getStrings } from 'assets/localization';
import './ToDoModal.scss';

const ToDoModal = (props) => {
  const { data, onClose, isVisible } = props;
  const { language } = useSelector((state) => state.settings);
  const STR = getStrings(language);

  return (
    <UIModalConfirm isVisible={isVisible} onClose={onClose}>
      adsd
    </UIModalConfirm>
  );
};

ToDoModal.propTypes = {
  data: PropTypes.shape({}).isRequired,
  onClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export { ToDoModal };
