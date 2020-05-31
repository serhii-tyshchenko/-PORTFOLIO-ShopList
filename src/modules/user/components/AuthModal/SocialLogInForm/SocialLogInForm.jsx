import React from 'react';
import PropTypes from 'prop-types';
import './SocialLogInForm.scss';
import { UIIconButton } from 'modules/ui';

const SocialLogInForm = (props) => {
  const { onSignInWithGoogle } = props;

  return (
    <>
      <div className="social-login">
        <div className="social-login__label">or connect with</div>
        <div className="social-login__btns">
          <UIIconButton
            icon="google"
            extraClassName="social-login__btn"
            onClick={onSignInWithGoogle}
          />
        </div>
      </div>
    </>
  );
};

SocialLogInForm.propTypes = {
  onSignInWithGoogle: PropTypes.func.isRequired,
};

export { SocialLogInForm };
