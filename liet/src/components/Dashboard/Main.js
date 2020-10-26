import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';
import logo from '../../assets/logo.png';

import CreateCommittee from './Form/create-committee.component';
import CreateSHS from './Form/create-student-helps-student.component';
import CreateIntern from './Form/create-intern-job-opportunity';
import CreateMemory from './Form/create-memory';

const Styles = styled.div`
body {
  background: #ffea92;
  margin: 0;
  font-family: "Open Sans", Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #fff;
  padding-left: 240px;
}
h2{
  color: white;
  padding-top: 20px;
  font-size: 2em;
  font-weight: bold;
}
main {
  left: 100px;
  position: relative;
  height: 100vh;
}
.menu {
  background: #EB891C;
  height: 100vh;
  width: 240px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  outline: none;
}
.menu .avatar {
  background: rgba(0, 0, 0, 0.1);
  padding: 2em 0.5em;
  text-align: center;
}
.menu .avatar img {
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #ffea92;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
}
.menu .avatar h2 {
  font-weight: normal;
  margin-bottom: 0;
}
.menu ul {
  list-style: none;
  padding: 0.5em 0;
  margin: 0;
}
.menu ul li {
  padding: 0.5em 1em 0.5em 3em;
  font-size: 0.95em;
  font-weight: regular;
  background-repeat: no-repeat;
  background-position: left 15px center;
  background-size: auto 20px;
  transition: all 0.15s linear;
  cursor: pointer;
}
.menu ul li.icon-dashboard {
  background-image: url("http://www.entypo.com/images//gauge.svg");
}
.menu ul li.icon-customers {
  background-image: url("http://www.entypo.com/images//briefcase.svg");
}
.menu ul li.icon-add-users {
  background-image: url("http://www.entypo.com/images//add-user.svg");
}
.menu ul li.icon-graduation-cap {
  background-image: url("http://www.entypo.com/images//graduation-cap.svg");
}
.menu ul li.icon-shop {
  background-image: url("http://www.entypo.com/images//shop.svg");
}
.menu ul li.icon-publish {
  background-image: url("http://www.entypo.com/images//publish.svg");
}
.menu ul li.icon-log-out {
  background-image: url("http://www.entypo.com/images//log-out.svg");
}
.menu ul li.icon-calendar {
  background-image: url("http://www.entypo.com/images//calendar.svg");
}
.menu ul li.icon-documents {
  background-image: url("http://www.entypo.com/images//documents.svg");
}
.menu ul li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.menu ul li:focus {
  outline: none;
}
@media screen and (max-width: 900px) and (min-width: 400px) {
  body {
    padding-left: 90px;
  }
  .menu {
    width: 90px;
  }
  .menu .avatar {
    padding: 0.5em;
    position: relative;
  }
  .menu .avatar img {
    width: 60px;
  }
  .menu .avatar h2 {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 100px;
    margin: 0;
    min-width: 200px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.4);
    transform: translate3d(-20px, -50%, 0);
    transition: all 0.15s ease-in-out;
  }
  .menu .avatar:hover h2 {
    opacity: 1;
    transform: translate3d(0px, -50%, 0);
  }
  .menu ul li {
    height: 60px;
    background-position: center center;
    background-size: 30px auto;
    position: relative;
  }
  .menu ul li span {
    opacity: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.2em 0.5em;
    border-radius: 4px;
    top: 50%;
    left: 80px;
    transform: translate3d(-15px, -50%, 0);
    transition: all 0.15s ease-in-out;
  }
  .menu ul li span:before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: -5px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid rgba(0, 0, 0, 0.5);
    transform: translateY(-50%);
  }
  .menu ul li:hover span {
    opacity: 1;
    transform: translate3d(0px, -50%, 0);
  }
}
@media screen and (max-width: 400px) {
  body {
    padding-left: 0;
  }
  .menu {
    width: 230px;
    box-shadow: 0 0 0 100em rgba(0, 0, 0, 0);
    transform: translate3d(-230px, 0, 0);
    transition: all 0.3s ease-in-out;
  }
  .menu .smartphone-menu-trigger {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 100%;
    background: #EB891C;
  }
  .menu .smartphone-menu-trigger:before,
  .menu .smartphone-menu-trigger:after {
    content: '';
    width: 50%;
    height: 2px;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .menu .smartphone-menu-trigger:after {
    top: 55%;
    transform: translate3d(-50%, -50%, 0);
  }
  .menu ul li {
    padding: 1em 1em 1em 3em;
    font-size: 1.2em;
  }
  .menu:focus {
    transform: translate3d(0, 0, 0);
    box-shadow: 0 0 0 100em rgba(0, 0, 0, 0.6);
  }
  .menu:focus .smartphone-menu-trigger {
    pointer-events: none;
  }
}


`;

export const Main = () => (
    <Styles>
   <nav class="menu" tabindex="0">
	<div class="smartphone-menu-trigger"></div>
  <header class="avatar">
		<img src={logo} />
    <h2>ADMIN</h2>
  </header>
	<ul>
    <li class="icon-add-users"><a href="/dashboard/add-committee"><span>Committees</span></a></li>
    <li class="icon-graduation-cap"><a href="/dashboard/add-student-helps-student"><span>Student Helps Student</span></a></li>
    <li class="icon-documents"><a href="/dashboard/add-memory"><span>Memory Wall</span></a></li>
    <li class="icon-customers"><a href="/dashboard/add-intern-job-opportunity"><span>Intern/Job</span></a></li>
    <li class="icon-publish"><a href="/dashboard/add-blog"><span>Blog</span></a></li>
    <li class="icon-shop"><a href="/dashboard/add-shop"><span>Shop</span></a></li>
    <li class="icon-log-out"><a href="/login"><span>Logout</span></a></li>
  </ul>
</nav>

<main>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={CreateCommittee} />
          <Route  path="/dashboard/add-committee" component={CreateCommittee} />
          <Route  path="/dashboard/add-student-helps-student" component={CreateSHS} />
          <Route  path="/dashboard/add-memory" component={CreateMemory} />
          <Route  path="/dashboard/add-intern-job-opportunity" component={CreateIntern} />
          <Route  path="/dashboard/add-blog" component={CreateIntern} />
          <Route  path="/dashboard/add-shop" component={CreateIntern} />

        </Switch>
      </Router> 

</main>
    </Styles>
)