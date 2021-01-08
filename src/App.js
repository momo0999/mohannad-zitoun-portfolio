import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbars/Navbar';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
