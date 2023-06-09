import React from 'react'
import style from './style.module.css'
import { useNavigate } from "react-router-dom";

import {MDBBtn } from 'mdb-react-ui-kit';
import {Button} from '../../components/Button'

export const Hero = () => {
  const navigate = useNavigate();

  function handleLoginClick(){
    navigate('/login');
  }

  function handleSignUpClick(){
    navigate('/signup');
  }

  return (
    <div className={style.hero} id="home-section">
        <div className={style.hero_image}></div>
        <p className={style.text}>
            Servizo Is Provided<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To Mke You Online <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shopping   More Confident 
        </p>
        <div className={style.buttons}>
        <MDBBtn 
          onClick={handleLoginClick}
          className={style.login} 
          >
            <span>Login</span>
          </MDBBtn>
          <MDBBtn
            onClick={handleSignUpClick}
            className={style.subscribe}
          >
            <span>Register</span>
          </MDBBtn>

        </div>
    </div>
  )
}
