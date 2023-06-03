import React,{useState} from 'react'
import style from './style.module.css'
import {Card} from '../Card/index'

export const ShopeHero = () => {
  const [formData, setFormData] = useState({
    shopeName:'',
    

  });
  const TopCards = [
    { value:formData.shopeName, data: 'shopeName' },
    { value:formData.shopeName, data: 'shopeName' },
    { value:formData.shopeName, data: 'shopeName' },

  ];
  
  return (
    <div className={style.hero}>
       <p className={style.tittle}>
        Top  Shopes
        <span className={style.border}></span>
      </p>
      <div className={style.cards_wrapper}>
      {TopCards.map((item) =>(
                <Card />
      ))}
      </div>
    </div>
  )
}
