import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import backgroundImage from '../assets/discussion.jpg';

const Styles = styled.div`
    
    .jumbo {
        background: url(${backgroundImage}) no-repeat fixed top;
        background-size: cover;
        color: #ccc;
        height: 300px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity:0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right:0;
        z-index: -1;
    }

      .short-description {
        animation: short-description;
      }
    
      .short-description{
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        position: relative;
        animation-duration: 20s;
        animation-timing-function: steps(36, end);
        animation-iteration-count: infinite;
      }
      .short-description::after{
        content: "|";
        position: absolute;
        right: 0;
        animation: caret infinite;
        animation-duration: 1s;
        animation-timing-function: steps(1, end);
      }
      @keyframes short-description {
        0%,
        50%,
        100% {
          width: 0;
        }
        10%,
        40% {
          width: 36em;
        }
      }
      @keyframes caret {
        0%,
        100% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
      }

`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <br></br>
                <h1>Welcome to <strong>SHS</strong></h1>
                <h2>Student Helps Student Program</h2>
                <p>
                    <span class="short-description">A PLACE WHERE STUDENTS TEACHING EACH OTHER, SHARE AND DISCUSS IDEA.</span>
                </p>
            </Container>
        </Jumbo>
    </Styles>
    
)




