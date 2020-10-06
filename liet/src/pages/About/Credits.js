import React from 'react';
import styled from 'styled-components';

import { Thanks } from '../../components/Thanks';
import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';

const Styles = styled.div`

`;

export const Credits = () => (
    <Styles>
                   <NavigationBar />

        <Thanks />
        <Footer />
    </Styles>
)