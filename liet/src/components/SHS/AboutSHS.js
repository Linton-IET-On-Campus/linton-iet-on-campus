import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';

const Styles = styled.div`

    .liet{
        text-align: center;
    }

    .container{
        padding: 10px;
    }
`;


export const AboutSHS = () => (
    <Styles>
        
        <div className="liet">
            <h2>Student Helps Student Program (SHS)</h2>    
        </div>
        
        <Container className="article">
                <p>
                    <strong>Student Helps Student Program (SHS)</strong> is an idea or movement where student becomes teacher and teaches about a topic to other student.
                    It is like a helpdesk for student who is under-performed gets helps from a well-performed student. 
                </p>
                <p> At SHS, we share, teach and discuss new idea and technology.
                    The topic chosen are related and updated according to the studies field and majors. 
                    <em> Anyone can be a student helper and teach other. </em> 
                    You do not need to be an expert or professional to teach a topic. 
                    In fact, you can be a beginner with zero knowledge. 
                    You can learn the knowledge through teaching others and doing research by your own. 
                </p>
                <p>
                    Each topic now is moderated by group admin.
                    Currently, we only have engineering side groups going on.
                    We are looking for more majors and sides to join us.
                    We are seeking for Business &amp; Accouting, Design majors students to join us too.
                </p>
                <p>
                    <em> Come and join us, and be a part of our crew. 
                    <strong> We help other taste success and you too can be part of it. </strong></em>
                </p>
        </Container>

  </Styles>

)