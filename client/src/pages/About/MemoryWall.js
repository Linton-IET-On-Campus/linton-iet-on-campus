import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/Footer';
import { Memory } from '../../components/Memory/Memory';
import { NavigationBar } from '../../components/NavigationBar';

const Styles = styled.div`

`;


export const MemoryWall = () => (
    <Styles>
           <NavigationBar />

        <br></br>

        <Memory />

        <Footer />

  </Styles>

)