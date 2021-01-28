import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbars/Navbar';
import Showcase from './components/Showcase';
import About from './components/About';

const App = () => {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.className = 'dark-mode';
    } else {
      document.documentElement.className = 'light-mode';
    }
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPreferDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode || false;
    } else if (userPreferDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return (
    <div>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Switch>
          <Route exact path='/' component={Showcase} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
