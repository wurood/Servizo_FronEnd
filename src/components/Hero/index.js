import React from 'react'
import style from './style.module.css'
import {MDBBtn } from 'mdb-react-ui-kit';
import {Button} from '../../components/Button'

export const Hero = () => {
  return (
    <div className={style.hero}>
        <div className={style.hero_image}></div>
        <p className={style.text}>
            Servizo Is Provided<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To Mke You Online <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shopping   More Confident 
        </p>
        <div className={style.buttons}>
        <MDBBtn 
          className={style.login} 
          >
            <span>Login</span>
          </MDBBtn>
          <MDBBtn
            className={style.subscribe}
          >
            <span>Register</span>
          </MDBBtn>

        </div>
    </div>
  )
}
