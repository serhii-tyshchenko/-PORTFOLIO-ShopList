import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getSettings } from 'store/actions';
import { AuthContainer } from 'modules/user';
import { Home } from './pages';

function App() {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.settings.theme);
  document.documentElement.setAttribute('data-theme', theme);
  const { uid, isLogged } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogged) {
      dispatch(getItems(uid));
      dispatch(getSettings(uid));
    }
  }, [uid]);

  return (
    <div className="App">
      <Home />
      <AuthContainer />
    </div>
  );
}

export default App;
