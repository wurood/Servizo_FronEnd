import React from 'react'
import style from './style.module.css'
import LogoImage from '../../assets/logo.png'

export const Logo = (props) => {
  return (
    <img src={LogoImage} alt='logo image' className={` ${style.logo} ${props.class}`}/>
  )
}
