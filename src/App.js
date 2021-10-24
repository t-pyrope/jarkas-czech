import React, { useState, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
// components
import Nav from './components/Nav';
import Footer from './components/Footer';
// pages
import OurCourse from './pages/OurCourse';
const OurTeam = React.lazy(() => import('./pages/OurTeam'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));

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
        <Suspense fallback={<div style={{ minHeight: '100vh' }}/>}>
          <Route path="/team">
              <OurTeam />
          </Route>
          <Route path="/contacts">
            <ContactUs />
          </Route>
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
