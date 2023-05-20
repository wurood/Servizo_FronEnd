import React from 'react'
import style from './style.module.css'
import shopImage from '../../../assets/shop_image.png'
import { FcLikePlaceholder} from "react-icons/fc";
import { AiFillLike} from "react-icons/ai";


export const Card = () => {
  return (
    <div className={style.card}>
        <img src={shopImage} alt='shop image' className={style.image} />
        <div className={style.card_content}>
           
        <p className={style.text}>Fairies Shop</p>
        {/* <hr className={style.horizontal_hr}/>
        <hr className={style.vertical_hr}/>

        <div className={style.interaction}>
            <span><FcLikePlaceholder /> 50</span>
            <span><AiFillLike /> 50</span>
        </div> */}
        </div>
    </div>
  )
}

