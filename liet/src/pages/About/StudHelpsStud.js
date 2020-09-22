import React from 'react'
import styled from 'styled-components';

import { Jumbotron } from '../../components/Jumbotron';
import { AboutSHS } from '../../components/SHS/AboutSHS';
import { QnA } from '../../components/SHS/QnA';
import { Group } from '../../components/SHS/Group';

import { Footer } from '../../components/Footer';

const Styles = styled.div`

`;

export const StudHelpsStud = () => (
    <Styles>

   <Jumbotron />
   <AboutSHS />
   <hr />
   <QnA />
   <hr />
   <Group />
    <Footer />

    </Styles>

)