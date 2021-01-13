import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbars/Navbar';
import Showcase from './components/Showcase';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Showcase} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
