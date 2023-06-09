import React from 'react'
import style from './style.module.css'
import {MDBBtn } from 'mdb-react-ui-kit';

export const Button = (props) => {
  return (
    <MDBBtn  type={props.type}className={ `${style.button} ${props.class} `} onClick={props.onClick}>{props.text}</MDBBtn>

  )
}
