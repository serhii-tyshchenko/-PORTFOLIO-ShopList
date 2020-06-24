import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UIIconButton } from 'modules/ui';
import { showModal, signOut } from 'store/actions';
import { getLocalization } from 'assets/localization';

const AuthBtn = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const { language } = useSelector((state) => state.settings);
  const STR = getLocalization(language);
  const btnIcon = isLogged ? 'user' : 'user-o';
  const btnTitle = isLogged ? STR.SIGN_OUT : STR.SIGN_IN;
  function handleLogInClick() {
    if (isLogged) {
      dispatch(signOut());
    } else {
      dispatch(showModal({ modalName: 'auth', data: null }));
    }
  }

  return (
    <UIIconButton
      extraClassName="login__btn"
      icon={btnIcon}
      title={btnTitle}
      onClick={handleLogInClick}
    />
  );
};

export { AuthBtn };
