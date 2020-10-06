import React, { useState } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import logo from '../assets/logo.png';
import Axios from "axios";

import styled from 'styled-components';

const Styles = styled.div`
@media all and (min-width: 480px) {
    .Login {
      padding: 60px 0;
    }
  
    .Login form {
      margin: 0 auto;
      max-width: 320px;
    }
  }

  .img{
      padding: 100px;
  }





`;


export const Register= () => {

    const [registerEmail, setEmail] = useState("");
    const [registerPassword, setPassword] = useState("");
  
    function validateForm() {
      return registerEmail.length > 0 && registerPassword.length > 0;
    }
  
    const register = () => {
        Axios({
            method: "POST",
            data: {
                email: registerEmail,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:5000/admins/register",
        }).then((res) => console.log(res));    
    };

    return(

        <div className="Login container text-center">
            <br />
            <img src={logo} width="200" height="200" />
            <br />
            <br/>
            
            <h1>Register</h1>

            <br />
            <br />

        <form>

          <FormGroup controlId="email">

            <label>Email</label>
            <FormControl
              autoFocus
              type="email"
              value={registerEmail}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" >
            <label>Password</label>
            <FormControl
              value={registerPassword}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button block  disabled={!validateForm()} onClick={register}>
            Register
          </Button>
        </form>
      </div>
      
    );

}
