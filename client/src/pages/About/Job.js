import React from 'react'
import { Intern } from '../../components/Intern/Intern'
import styled from 'styled-components';


import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';

const Styles = styled.div`

`;


export const Job = () => (
    <Styles>
           <NavigationBar />

        <br></br>
        <Intern />

        <Footer />

  </Styles>

)