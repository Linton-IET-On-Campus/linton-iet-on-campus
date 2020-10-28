import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Styles = styled.div`

    .container{
        padding: 10px;
    }

    .liet{
        text-align: center;
        margin: 20px;
    }


`;


export const AboutLIET = () => (
    <Styles>

        <br></br>
        <Container className="article">
        <div className="liet">
            <h1>Linton IET on Campus</h1>    
            <br></br>
            <img src={logo} width="200" height="200" />
        </div>
        </Container>

        <Container className="article">
                <p>Linton IET was founded by <a href="https://hovahyii.github.io/portfolio-v2/" target="_blank" >Hovah Yii</a> with the help of Dr. Sadip, Dr. Ery, friends and committees.</p>
                <p>Linton IET welcomes all engineering and IT/ICT students <strong>(Mechanical, Civil, Electrical &amp;	 Electronic, Architecture and also software engineer)</strong> to join Linton IET for their academic performance and career advancement.</p>
                <p>Although, the IET is a professional body solely for engineers. Linton IET also welcomes Business, Accounting, Quantity Survey and Graphic Design student to join.</p>
        </Container>

  </Styles>

)