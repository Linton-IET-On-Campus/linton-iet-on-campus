import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Styles = styled.div`
    
    .navbar{
        z-index: 15;

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
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)