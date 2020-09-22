import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';

import { LIET } from './pages/About/LIET';
import { Committee } from './pages/About/Committee';
import { Credits } from './pages/About/Credits';
import { ClubFee } from './pages/About/ClubFee';

import { Graffiti } from './pages/About/Graffiti';
import { StudHelpsStud } from './pages/About/StudHelpsStud';
import { Job } from './pages/About/Job';
import { Collaboration } from './pages/About/Collaboration';

import { Event } from './pages/Event';
import { Blog } from './pages/Blog';
import { Shop } from './pages/Shop';
import { NoMatch } from './pages/NoMatch';

import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (
  <React.Fragment>
    <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/linton-iet-on-campus" component={LIET} /> 
          <Route path="/about/committee" component={Committee} />
          <Route path="/about/credits" component={Credits} />
          <Route path="/about/club-fee" component={ClubFee} />

          <Route path="/about/graffiti" component={Graffiti} />
          <Route path="/about/student-helps-student" component={StudHelpsStud} />
          <Route path="/about/intern-job-opportunity" component={Job} />
          <Route path="/about/collaboration" component={Collaboration} />

          <Route path="/blog" component={Blog} />
          <Route path="/event" component={Event} />
          <Route path="/shop" component={Shop} />
          <Route component={NoMatch} />
        </Switch>
      </Router> 
      <Layout />
    
  </React.Fragment>
  );
}

export default App;
