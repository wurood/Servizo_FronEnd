import React from 'react'
import style from './style.module.css'
import {Button} from '../../components/Button'
import {Card} from './Card/index'
import { Pagination } from './Pagination'

export const Cards = () => {
  return (
    <div className={style.cards_wrapper}>
        <div className={style.first_section}>
        <p className={style.tittle}>
        list  of  Shopes
        <span className={style.border}></span>
        </p>
        <Button text="View All Property" class={style.button}/>
        </div>
        <div className={style.cards}>
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
        </div>
        <Pagination />

    </div>
  )
}
