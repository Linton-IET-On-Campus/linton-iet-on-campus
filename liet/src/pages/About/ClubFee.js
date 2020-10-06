import React from 'react';
import styled from 'styled-components';

import { ChoosePlan } from '../../components/ChoosePlan/ChoosePlan';
import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';

const Styles = styled.div`

`;

export const ClubFee = () => (
    <Styles>
                   <NavigationBar />

    <br></br>
    <ChoosePlan />
    <Footer />
</Styles>
)