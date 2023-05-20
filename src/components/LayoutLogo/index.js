import React, { useState ,useEffect } from 'react'
import style from './style.module.css'
import LayoutLogoImg from '../../assets/LayoutLogo.png'

export const LayoutLogo = (props) => {
  return (
    <img src={LayoutLogoImg} alt='logo image' className={` ${style.logo} ${props.class}`}/>

  )
}
