import React from 'react'
import style from './style.module.css'

export const SubTittle = (props) => {
  return (
    <h1 className={ `${style.text} ${props.class} `}>{props.Tittle}</h1>
  )
}
