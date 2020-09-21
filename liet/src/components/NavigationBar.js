import React from 'react';
<div class="header">
<h1>Linton IET on Campus</h1>
</div>
<div>
    <img src="https://scontent.fmkz1-1.fna.fbcdn.net/v/t1.0-9/87050448_107883780804984_3295456362439376896_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=fj1ICFIeYg0AX_xHn_t&_nc_ht=scontent.fmkz1-1.fna&oh=7159d1041640a7b8daa6252617376a3c&oe=5F8DB791" width="200" height="200" align="right">
    <p>Linton IET was founded by <a href="https://hovahyii.github.io/linton.life/" target="_blank";>Hovah Yii</a> with the help of Dr.Sadip & Dr.Ery, friends and committees.</p>
    <p>Linton IET welcomes all engineering and IT/ICT students <strong>(Mechanical, Civil, Electrical & Electronic, Architecture and also software engineer)</strong> to join Linton IET for their academic performance and career advancement.</p>
    <p>Although, the IET is a professional body solely for engineers. Linton IET also welcomes Business, Accounting, Quantity Survey and Graphic Design student to join.</p>

    <ul class="ul-check list-unstyled success">
      <li>Personal and Professional Support</li>
      <li>Stay up to date with the industry</li>
      <li>Take your career to a new height</li>
      <li>Site visit and academic support</li>
      <li>Programming bootcamp</li>
    </ul>
<hr>
</div>import styled from 'styled-components';
import logo from '../assets/logo.png';

const Styles = styled.div`
    


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
        <Navbar bg="dark" variant="dark" expand="lg">
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
                            <NavDropdown.Item href="/about/graffiti">Graffiti</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/about/student-helps-student">Student Helps Student</NavDropdown.Item>
                            <NavDropdown.Item href="/about/intern-job-opportunity">Intern/Job</NavDropdown.Item>
                            <NavDropdown.Item href="/about/collaboration">Collaboration</NavDropdown.Item>
                        </NavDropdown>
                    <Nav.Item><Nav.Link href="/blog">Blog</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/event">Event</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/shop">Shop</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)