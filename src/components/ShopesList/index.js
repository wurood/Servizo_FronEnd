import React from 'react'
import style from './style.module.css'
import { ListItem } from './ListItem'

export const ShopesList = () => {
    const cards = [1, 2, 3];

  return (
    <div className={style.list}>
        {cards.map((item) =>{
         return  <ListItem />

        })}
    </div>
  )
}
