import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/Footer';
import { AboutLIET } from '../../components/AboutLIET';
import { WhyJoinUs } from '../../components/WhyJoinUs/WhyJoinUs';
import { NavigationBar } from '../../components/NavigationBar';

const Styles = styled.div`

`;


export const LIET = () => (
    <Styles>
           <NavigationBar />

        <br></br>

       <AboutLIET />

        <WhyJoinUs />

        <Footer />

  </Styles>

)