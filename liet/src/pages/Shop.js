import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { ShopList } from '../components/Shop/ShopList';
import { NavigationBar } from '../components/NavigationBar';

const Styles = styled.div`

`;

export const Shop = () => (
    <Styles>
           <NavigationBar />

        <br></br>

        <ShopList />

        <Footer />

  </Styles>

)