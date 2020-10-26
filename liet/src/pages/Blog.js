import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { BlogList } from '../components/Blog/BlogList';
import { NavigationBar } from '../components/NavigationBar';

const Styles = styled.div`

`;

export const Blog = () => (
    <Styles>
           <NavigationBar />

        <br></br>

        <BlogList />

        <Footer />

  </Styles>

)