import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';

import { LIET } from './pages/About/LIET';

import { Committee } from './pages/About/Committee';
import { Credits } from './pages/About/Credits';
import { ClubFee } from './pages/About/ClubFee';

import { MemoryWall } from './pages/About/MemoryWall';
import { StudHelpsStud } from './pages/About/StudHelpsStud';
import { Job } from './pages/About/Job';
import { Collaboration } from './pages/About/Collaboration';

import { Event } from './pages/Event';
import { Blog } from './pages/Blog';
import { Shop } from './pages/Shop';


import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard/Dashboard';

import { NoMatch } from './pages/NoMatch';

import { Layout } from './components/Layout';

function App() {

  return (
  <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/linton-iet-on-campus" component={LIET} /> 
          <Route path="/about/committee" component={Committee} />
          <Route path="/about/credits" component={Credits} />
          <Route path="/about/club-fee" component={ClubFee} />

          <Route path="/about/memory-wall" component={MemoryWall} />
          <Route path="/about/student-helps-student" component={StudHelpsStud} />
          <Route path="/about/intern-job-opportunity" component={Job} />
          <Route path="/about/collaboration" component={Collaboration} />

          <Route path="/blog" component={Blog} />
          <Route path="/event" component={Event} />
          <Route path="/shop" component={Shop} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />

          <Route path="/register" component={Register} />

          <Route component={NoMatch} />
        </Switch>
      </Router> 
      <Layout />
    
  </React.Fragment>
  );
}

export default App;
