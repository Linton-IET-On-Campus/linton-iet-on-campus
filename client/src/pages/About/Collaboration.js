import React from 'react';
import styled from 'styled-components';

import Contact from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';

const Styles = styled.div`

`;

export const Collaboration = () => (
    <Styles>
        <NavigationBar />
        <Contact />
        <Footer />
    </Styles>
)