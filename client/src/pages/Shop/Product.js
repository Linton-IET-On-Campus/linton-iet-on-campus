import React from 'react';
import styled from 'styled-components';

import { NavigationBar } from '../../components/NavigationBar';
import  ProductDetails  from '../../components/Shop/ProductDetails';
import { Footer } from '../../components/Footer';

const Styles = styled.div`

`;

export const Product = () => (
    <Styles>
        
        <NavigationBar />

        <br></br>

        <ProductDetails />

        <Footer />

  </Styles>

)