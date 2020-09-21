import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { Footer } from '../../components/Footer';
import { WhyJoinUs } from '../../components/WhyJoinUs/WhyJoinUs';
import { AboutLIET } from '../../components/AboutLIET';

const Styles = styled.div`

`;


export const LIET = () => (
    <Styles>

        <br></br>

       <AboutLIET />

        <WhyJoinUs />

        <Footer />

  </Styles>

)