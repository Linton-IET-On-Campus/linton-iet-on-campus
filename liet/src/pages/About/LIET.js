import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/Footer';
import { AboutLIET } from '../../components/AboutLIET';
import { WhyJoinUs } from '../../components/WhyJoinUs/WhyJoinUs';

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