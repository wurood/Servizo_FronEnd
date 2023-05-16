
import React, { useState ,useEffect } from 'react'
import style from './style.module.css'
import { MDBRow, MDBCol,MDBInput ,MDBBtn } from 'mdb-react-ui-kit';
import {SideImage} from '../../components/SideImage'
import {Logo} from '../../components/Logo'
import{Tittle} from '../../components/Tittle'
import {SubTittle} from '../../components/SubTittle'
import {Language} from '../../components/Language'
import {CheckAccount} from '../../components/CheckAccount'
import {Button} from '../../components/Button'

export const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) =>{
    e.preventDefault();

  }

  return (
    <MDBRow className={style.row}>
      <MDBCol lg='6' md='6' sm='6'  className={style.sideImage} >
        <SideImage />
      </MDBCol>
      <MDBCol lg='6' md='6' sm='6' xs='12'>
          <Logo class={style.logo}/>
          <Tittle Tittle="Hello there !"  class={style.Tittle}/>
          <SubTittle Tittle="Welcome to your dashboard"  class={style.SubTittle}/>

          <MDBRow tag="form" className={ ` ${style.form}`} onSubmit={(e) =>handelSubmit(e)}>
            <MDBCol md="6">
            <MDBInput
                value={formData.email}
                name='email'
                onChange={onChange}
                id='validationCustom05'
                required
                label='email'
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                value={formData.password}
                type='password'
                name='password'
                onChange={onChange}
                id='validationCustom05'
                required
                label='password'
              />
            </MDBCol>
  
            <MDBCol size="4" className={style.button_wrapper}>
              <Button text="Login" />
            </MDBCol>
          </MDBRow>
          <CheckAccount text="Don’t have Account !" navigate=" Register" />
          <Language/> 

      </MDBCol>
    </MDBRow>
  )
}
