import React from 'react'
import { Slide } from '../components/Slide';
import styled from 'styled-components';
import { TheIET } from '../components/TheIET';
import { Footer } from '../components/Footer';

const Styles = styled.div`
    
`;

export const Home = () => (
    <Styles>
       
        <Slide />
        <br></br>
        <TheIET />
        <br></br>
         <Footer />
         
    </Styles>
)