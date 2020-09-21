import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Styles = styled.div`
    .d-block{
        width: 100% !important;
        height: 80vh !important;
    }

    .carousel{
        left: 0;
        width: 100%;
    }
    
    @media only screen and (max-width: 960px) {
        .d-block{
            height: 80vw !important;
        }
    }

`;

export const Slide = (props)  => (
    <Styles>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://image.freepik.com/free-vector/industry-4-0-illustration_46706-810.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Industrial Revolution 4.0</h3>
      <p>IR 4.0 is coming faster than anyone expected, are you ready?</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://images.unsplash.com/photo-1453060113865-968cea1ad53a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Learn to Code</h3>
      <p>Knowing how to code is the most essential skill in 21<sup>st</sup> century.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>No Man Is An Island</h3>
      <p>We teach, we learn, we play and together we grow.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Styles>
)