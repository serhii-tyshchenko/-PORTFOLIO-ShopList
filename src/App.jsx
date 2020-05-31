import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getItems, getSettings } from 'store/actions';
import { AuthContainer } from 'modules/user';
import {
  Home, About, NotFound, UI, UserProfile,
} from './pages';

function App() {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.settings.theme);
  document.querySelector('html').setAttribute('class', `theme-${theme}`);
  const { uid, isLogged } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogged) {
      dispatch(getItems(uid));
      dispatch(getSettings(uid));
    }
  }, [uid]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route path="/about" exact strict component={About} />
          <Route path="/user" exact strict component={UserProfile} />
          <Route path="/ui" exact strict component={UI} />
          <Route path="*" exact strict component={NotFound} />
        </Switch>
        <AuthContainer />
      </div>
    </Router>
  );
}

export default App;
