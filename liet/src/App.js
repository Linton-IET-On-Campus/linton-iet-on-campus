import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Event } from './pages/Event';
import { Blog } from './pages/Blog';
import { Shop } from './pages/Shop';
import { StudHelpsStud } from './pages/StudHelpsStud';
import { NoMatch } from './pages/NoMatch';

import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Footer } from './components/Footer'

function App() {
  return (
  <React.Fragment>
    <NavigationBar />
    <Jumbotron />
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/event" component={Event} />
          <Route path="/blog" component={Blog} />
          <Route path="student-helps-student" component={StudHelpsStud} />
          <Route path="shop" component={Shop} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Layout>
    <Footer />
  </React.Fragment>
  );
}

export default App;
