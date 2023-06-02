import React from 'react'
import style from './style.module.css'
import Image from '../../assets/rectangle_ll.png'

export const SideImage = () => {
  return (
    <img src={Image} alt="side image" className={style.sideImage}/>
  )
}
