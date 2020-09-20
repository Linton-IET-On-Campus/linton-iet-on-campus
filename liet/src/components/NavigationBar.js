import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background: #222;
    }

 

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
        &:hover{
            color: white;
        }
    }

    .nav-link{
        position: relative;
        float: left;
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">LIET</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/blog">Blog</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/event">Event</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/shop">Shop</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>

)