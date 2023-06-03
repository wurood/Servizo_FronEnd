import React from 'react'
import style from './style.module.css'
import { MDBContainer ,MDBRow,MDBCol,MDBInput} from 'mdb-react-ui-kit';
import { ShopeHero } from '../../components/ShopeHero'
import {ShopesList} from '../../components/ShopesList'
import LeftRect from '../../assets/rectangle_rr.png'
import RightRect from '../../assets/rectangle_ll.png'
import {Button} from '../../components/Button'

export const Shopes = () => {
  return (
   
    <MDBContainer fluid className={style.wrapper}>
      <ShopeHero />
      <img src={LeftRect} alt="left rect" className={style.left_rect}/>
      <img src={RightRect} alt="right recte" className={style.right_rect}/>
      <MDBRow className={style.row}>
      <MDBCol lg='6' md='6' sm='6' xs='12'>
      <MDBInput
             
                name='email'
          
                id='validationCustom05'
                required
                label='Search for shop,  etc..'
                className={style.search_input}
              />
      </MDBCol>
      <Button text="Search"  class={style.search_button}/>

      </MDBRow>
      <ShopesList />
    </MDBContainer>
  )
}
