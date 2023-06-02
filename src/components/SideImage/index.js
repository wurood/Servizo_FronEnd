import React from 'react'
import style from './style.module.css'
import Image from '../../assets/Side_Image.png'

export const SideImage = () => {
  return (
    <img src={Image} alt="side image" className={style.sideImage}/>
  )
}
