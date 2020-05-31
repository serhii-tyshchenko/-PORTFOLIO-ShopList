import React from 'react';
import PropTypes from 'prop-types';
import { UIButton, UIInput } from 'modules/ui';
import './SignInForm.scss';

const SignInForm = (props) => {
  const {
    onSubmit,
    onChange,
    data: { email, password },
    STR: { YOUR_EMAIL, YOUR_PASSWORD, SIGN_IN },
  } = props;

  return (
    <>
      <form onSubmit={onSubmit} className="signin-form">
        <UIInput
          value={email}
          type="email"
          name="email"
          extraClassName="signin-form__input"
          placeholder={YOUR_EMAIL}
          onChange={onChange}
          required
        />
        <UIInput
          type="password"
          name="password"
          extraClassName="signin-form__input"
          value={password}
          placeholder={YOUR_PASSWORD}
          onChange={onChange}
          required
        />
        <div className="signin-form__btns">
          <UIButton type="submit" btnType="primary" text={SIGN_IN} onClick={onSubmit} />
        </div>
      </form>
    </>
  );
};

SignInForm.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { SignInForm };
