import React from 'react';
import styled from 'styled-components';

import { OurTeam } from '../../components/OurTeam/OurTeam';
import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';

const Styles = styled.div`

`;


export const Committee = () => (
    <Styles>

        <NavigationBar />

        <br></br>
        <OurTeam />
        <Footer />
        
    </Styles>
)