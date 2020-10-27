import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/Footer';
import { Post } from '../../components/Blog/Post';
import { NavigationBar } from '../../components/NavigationBar';

const Styles = styled.div`

`;

export const SingleBlog = () => (
    <Styles>
        
        <NavigationBar />

        <br></br>

        <Post />

        <Footer />

  </Styles>

)