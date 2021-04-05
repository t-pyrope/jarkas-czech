import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
// pages
import Nav from './components/Nav';
import OurCourse from './pages/OurCourse';
import OurTeam from './pages/OurTeam';
import ContactUs from './pages/ContactUs';

function App() {
  const location = useLocation();
  const [enrollActive, setEnrollActive] = useState(false);
  const [trialActive, setTrialActive] = useState(false);

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <OurCourse
            enrollActive={enrollActive}
            setEnrollActive={setEnrollActive}
            trialActive={trialActive}
            setTrialActive={setTrialActive}
          />
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
}

export default App;
