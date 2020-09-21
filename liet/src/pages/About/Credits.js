import React from 'react';
import styled from 'styled-components';

import { Thanks } from '../../components/Thanks';
import { Footer } from '../../components/Footer';

const Styles = styled.div`

`;

export const Credits = () => (
    <Styles>
        <Thanks />
        <Footer />
    </Styles>
)