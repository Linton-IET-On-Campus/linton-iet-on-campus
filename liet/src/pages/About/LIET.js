import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Styles = styled.div`
.TextBoard {
  background-color: white;
  width: 100%;
  padding: 20px;
}

.Row {
  background-color: #aaa;
  padding: 20px;
  margin-top: 20px;npm 
}

`;


export const LIET = () => (
    <Styles>

    <Container>
        <Row>
            <h1>Linton IET on Campus</h1>
        </Row>
        <Row>
                <img src={logo} width="200" height="200" align="right" />

                <p>Linton IET was founded by <a href="https://hovahyii.github.io/linton.life/" target="_blank" >Hovah Yii</a> with the help of Dr.Sadip &amp;	 Dr.Ery, friends and committees.</p>
                <p>Linton IET welcomes all engineering and IT/ICT students <strong>(Mechanical, Civil, Electrical &amp;	 Electronic, Architecture and also software engineer)</strong> to join Linton IET for their academic performance and career advancement.</p>
                <p>Although, the IET is a professional body solely for engineers. Linton IET also welcomes Business, Accounting, Quantity Survey and Graphic Design student to join.</p>

                <ul class="ul-check list-unstyled success">
                    <li>Personal and Professional Support</li>
                    <li>Stay up to date with the industry</li>
                    <li>Take your career to a new height</li>
                    <li>Site visit and academic support</li>
                    <li>Programming bootcamp</li>
                </ul>
            <hr />
        </Row>    
  </Container>

  </Styles>

)