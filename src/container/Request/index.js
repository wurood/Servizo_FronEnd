import React from 'react'
import style from './style.module.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {RequestForm} from '../../components/RequestForm'
import LeftRect from '../../assets/rectangle_rr.png'
import RightRect from '../../assets/rectangle_ll.png'
export const Request = () => {
  return (
    <MDBContainer fluid className={style.wrapper}>
      <img src={LeftRect} alt="left rect" className={style.left_rect}/>
      <RequestForm />
      <img src={RightRect} alt="right recte" className={style.right_rect}/>
    </MDBContainer>
  )
}
