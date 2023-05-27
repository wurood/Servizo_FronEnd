import React from 'react'
import style from './style.module.css'
import { Tittle } from '../Tittle'

export const AboutUs = () => {
  return (
    <div className={style.aboutUs}>
      <hr className={style.separator}></hr>
      <p className={style.tittle}>About <span>US</span></p>
      <p className={style.description}>
      Servizo is A Website which make the online shopping more confident and more relabel by contracting with shops who has higher quality services, Sevizo guarantees the right of customers in the event that the quality is less than expected and also guarantees a refund to customers.
      </p>
    </div>
  )
}
