import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

body {
	height: 100vh;
	background: linear-gradient(to left, #3c3b3f, #605c3c);
	color: white;
	margin: 0;
	overflow: hidden;
}
#credits {
	display: grid;
	justify-content: center;
	grid-gap: 1.4rem;
	text-align: center;
	text-transform: uppercase;
	animation: 30s credits linear infinite;
}
.app {
	font-size: 3.2rem;
}
.job {
	font-size: 1.4rem;
	color: grey;
}
.name {
	font-size: 1.8rem;
}
@keyframes credits {
	0% { transform: translateY(100%); }
	100% { transform: translateY(-100%); }
}


`;

export const Thanks = (props)  => (
    <Styles>
        <div id="credits">
  <div class="app">Linton IET on Campus Website</div>
  <div class="category">
    <div class="job">Project Manager</div>
    <div class="name">Hovah Yii</div>
  </div>
  <div class="category">
    <div class="job">Full Stack Developer</div>
    <div class="name">Hovah Yii</div>
  </div>
  <div class="category">
    <div class="job">Lead Front End Developer</div>
    <div class="name">Yeo Kai Liang</div>
  </div>
  <div class="category">
    <div class="job">Front End Developer</div>
    <div class="name">Muhammad Harris Mohd Idris</div>
    <div class="name">Jordan Wong Pang Wei</div>
    <div class="name">Lee Kah Hin</div>
    <div class="name">Vincent Tang Wei Hong</div>
  </div>
  <div class="category">
    <div class="job">Contributors</div>
    <div class="name">Nigel Ryan</div>
    <div class="name">Lim Zi Heng</div>
  </div>
  <div class="category">
    <div class="job">Special thanks</div>
    <div class="name">Linton IET on Campus</div>
    <div class="name"><a href="https://www.rajang.com/" target="_blank">Rajang Digital Solutions</a></div>

  </div>
</div>
    
   </Styles>
  
)