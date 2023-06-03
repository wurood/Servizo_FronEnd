import React from 'react'
import style from './style.module.css'
import shopImage from '../../../assets/shop_image.png'
import { VscLocation } from "react-icons/vsc";
import {Button} from '../../../components/Button'
import {FcRating} from "react-icons/fc";
export const ListItem = ({tittle}) => {
  return (
    <div className={style.item}>
        <img src={shopImage} alt='shop image' className={style.image} />
        <div className={style.information}>
            <p className={style.company}>company: {tittle}</p>
            <p className={style.description}>Job description Role Summary In the above context, 
            the Cluster Relatio...</p>
            <p className={style.place}><VscLocation />  Nablus</p>
        </div>
        <Button text="Add Request" class={style.button}/>
        <div className={style.stars}>
            <FcRating  />
        </div>
    </div>
  )
}
