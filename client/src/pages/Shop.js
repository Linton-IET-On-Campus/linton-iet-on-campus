import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { ShopList } from '../components/Shop/ProductList';
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