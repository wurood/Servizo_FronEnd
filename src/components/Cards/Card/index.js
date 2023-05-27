import React from 'react'
import style from './style.module.css'
import shopImage from '../../../assets/shop_image.png'
import { FcLikePlaceholder} from "react-icons/fc";
import { AiFillLike} from "react-icons/ai";


export const Card = ({tittle}) => {
  return (
    <div className={style.card}>
        <img src={shopImage} alt='shop image' className={style.image} />
        <div className={style.card_content}>
          <p className={style.text}>{tittle}</p>
          <div className={style.like_section}>
            <span><FcLikePlaceholder /> 50</span>
          </div>
          <div className={style.interaction_section}>
            <span><AiFillLike /> 50</span>
          </div>
        </div>
    </div>
  )
}

