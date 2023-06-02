import React from 'react'
import style from './style.module.css'
import { MDBContainer } from 'mdb-react-ui-kit';
import {Hero} from '../../components/Hero'
import {AboutUs} from '../../components/AboutUs'
import {Cards} from '../../components/Cards'
import {Description} from '../../components/Description'
import {ContactUs} from '../../components/ContactUs'

export const Landing = () => {
  return (
    <MDBContainer fluid className={style.wrapper}>
      <Hero />
      <AboutUs />
      <Cards />
      <Description />
      <ContactUs />
    </MDBContainer>
  )
}
