import React from 'react';
import GlobalStyles from './components/GlobalStyles';
// pages
import Nav from './components/Nav';
import OurCourse from './pages/OurCourse';
import OurTeam from './pages/OurTeam';
import ContactUs from './pages/ContactUs';

import {Switch, Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <OurCourse />
        </Route>
        <Route path="/team">
          <OurTeam />
        </Route>
        <Route path="/contacts">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
