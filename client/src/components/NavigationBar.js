import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Styles = styled.div`
    
    .navbar{
        z-index: 15;
        text-align: justify;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        &:hover{
            color: white;
        }
    
    }

    .navbar-collapse {
        flex-grow: 0.5 !important;
    }
   
    .kfds-btn-primary:hover {
        color: #fff;
        background-color: #ff4646;
    }
    .kfds-c-show-web-to-ipad-only {
        visibility: inherit;
    }
    .kfds-srf-height-s {
        height: 30px;
    }
    .kfds-srf-rounded {
        border-radius: 100px !important;
    }
    .kfds-btn-primary {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        background-color: #ff5f5f;
        height: 30px;
        color: #fff;
        padding: 8px 16px;
        border-radius: 8px;
        border: none;
        transition: color .15s ease-in-out 0s,background-color .15s ease-in-out 0s;
    }
    .kfds-lyt-width-47 {
        width: 15vw;
    }
    .kfds-font-bold {
        font-weight: 700;
    }
    .kfds-left-mrgn-16 {
        margin-left: 16px;
    }
    input, button, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
    button, html input[type="button"], input[type="reset"], input[type="submit"] {
        -webkit-appearance: button;
        cursor: pointer;
    }
    button, select {
        text-transform: none;
    }
    button {
        overflow: visible;
    }

    @media (max-width: 1350px) and (min-width: 990px) {
        .kfds-lyt-width-47 {
            width: 100%;
        }
    
      }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar bg="dark" variant="dark" expand="lg"  fixed="top">
            <Navbar.Brand href="/">  
            <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        <NavDropdown title="About" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/about/linton-iet-on-campus">LIET</NavDropdown.Item>
                            <NavDropdown.Item href="/about/committee">Committee</NavDropdown.Item>
                            <NavDropdown.Item href="/about/credits">Credits</NavDropdown.Item>
                            <NavDropdown.Item href="/about/club-fee">Club Fee</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/about/memory-wall">Memory Wall</NavDropdown.Item>
                            <NavDropdown.Item href="/about/student-helps-student">Student Helps Student</NavDropdown.Item>
                            <NavDropdown.Item href="/about/intern-job-opportunity">Intern/Job</NavDropdown.Item>
                            <NavDropdown.Item href="/about/collaboration">Collaboration</NavDropdown.Item>
                        </NavDropdown>
                    <Nav.Item><Nav.Link href="/event">Event</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/blog">Blog</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/shop">Shop</Nav.Link></Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/login">
                            🔒 Login
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="support">

                        <Nav.Link href="https://ko-fi.com/hovahyii" target="_blank">
                            
                        <button type="submit" id="headerSupportBtn" class=" kfds-btn-primary kfds-font-bold kfds-srf-rounded kfds-lyt-width-47 kfds-srf-height-s custom-color-solid-bg  kfds-c-show-web-to-ipad-only kfds-left-mrgn-16 button-experiment" onclick="checkoutApp.initializeDonationFlow()">
                            <img src="https://storage.ko-fi.com/cdn/cuplogo-sm.png" class="kfds-right-mrgn-8" height="16"/>
                            <span id="">&nbsp;<strong>BUY ME A COFFEE</strong></span>
                        </button>

                        </Nav.Link>

                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)