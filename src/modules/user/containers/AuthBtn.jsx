import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UIIconButton } from 'modules/ui';
import { showModal, signOut } from 'store/actions';
import { getStrings } from 'assets/localization';

const AuthBtn = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const { language } = useSelector((state) => state.settings);
  const STR = getStrings(language);
  const icon = isLogged ? 'user' : 'user-o';
  function handleLogInClick() {
    if (isLogged) {
      dispatch(signOut());
    } else {
      dispatch(showModal({ modalName: 'auth', data: null }));
    }
  }
  return <UIIconButton extraClassName="login__btn" icon={icon} onClick={handleLogInClick} />;
};

export { AuthBtn };
