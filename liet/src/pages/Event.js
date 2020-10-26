import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { EventList } from '../components/Event/EventList';
import { NavigationBar } from '../components/NavigationBar';

const Styles = styled.div`

`;

export const Event = () => (
    <Styles>
           <NavigationBar />

        <br></br>

        <EventList />

        <Footer />

  </Styles>

)