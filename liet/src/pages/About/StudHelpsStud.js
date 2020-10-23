import React from 'react'
import styled from 'styled-components';

import { Jumbotron } from '../../components/Jumbotron';
import { AboutSHS } from '../../components/SHS/AboutSHS';
import { QnA } from '../../components/SHS/QnA';
import { Group } from '../../components/SHS/Group';

import { Footer } from '../../components/Footer';
import { NavigationBar } from '../../components/NavigationBar';

const Styles = styled.div`

`;

export const StudHelpsStud = () => (
    <Styles>

    <NavigationBar />

    <Jumbotron />
    <AboutSHS />
    <hr />
    <QnA />
    <hr />
    <Group />
    <Footer />

    </Styles>

)