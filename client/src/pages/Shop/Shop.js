import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/Footer';
import  FullProductList  from '../../components/Shop/FullProductList';
import { NavigationBar } from '../../components/NavigationBar';

const Styles = styled.div`

`;

export const Shop = () => (
  <Styles>
      
        <NavigationBar />

        <br></br>

        <FullProductList />

        <Footer />

  </Styles>

)