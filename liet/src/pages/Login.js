import React, { useState } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
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


export const Login= () => {

    const [loginEmail, setEmail] = useState("");
    const [loginPassword, setPassword] = useState("");
  
    const login = () => {
        Axios({
            method: "POST",
            data: {
                email: loginEmail,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:5000/admins/login",
        }).then((res) => console.log(res));
    }

    return(

        <div className="Login container text-center">
            <br />
            <img src={logo} width="200" height="200" />
            <br />
            <br/>

            <h1>Login</h1>

            <br />
            <br />


        <form>
          <FormGroup controlId="email" >
            <label>Email</label>
            <FormControl
              autoFocus
              type="email"
              value={loginEmail}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" >
            <label>Password</label>
            <FormControl
              value={loginPassword}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button block onClick={login}>
            Login
          </Button>
        </form>
      </div>
      
    );

}
