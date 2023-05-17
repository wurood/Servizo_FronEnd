import React from 'react'
import style from './style.module.css'

export const CheckAccount = (props) => {
  return (
    <p   className={` ${style.text} ${props.class}`} >{props.text}<span className={style.span}>  {props.navigate}</span></p>
  )
}
