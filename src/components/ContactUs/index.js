import React, { useState ,useEffect } from 'react'
import style from './style.module.css'
import {Tittle} from '../Tittle/index'
import {SubTittle} from '../SubTittle/index'
import { MDBRow, MDBCol,MDBInput  } from 'mdb-react-ui-kit';
import {Button} from '../../components/Button'
import Map from '../../assets/map.png'
import { AiFillPhone } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube} from "react-icons/ai";
import { AiFillInstagram} from "react-icons/ai";
export const ContactUs = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message:''
  });

  const MessageFormeData = [
    { value: formData.name, data: 'name' },
    { value: formData.email, data: 'email' },
    { value: formData.message, data: 'message' },
  ];

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) =>{
    e.preventDefault();

  }

  return (
    <div className={style.wrapper}>
      <Tittle Tittle="Get In Touch"  class={style.Tittle}/>
      <MDBRow className={style.row}>
      <MDBCol lg='6' md='6' xs='12' sm='6'  className={style.colHeight}>
      <SubTittle Tittle=" Leave us a message"  class={style.SubTittle}/>

          <MDBRow tag="form" className={ ` ${style.form}`} onSubmit={(e) =>handelSubmit(e)}>
          {MessageFormeData.map((item) =>(
                <MDBCol md="10" >
                <MDBInput
                    value={item.value}
                    name={item.data}
                    onChange={onChange}
                    id={item.data}
                    required
                    label={item.data}
                    className={item.data}
                  />
                </MDBCol>
              ))}
  
            <MDBCol size="4" className={style.button_wrapper}>
              <Button text="Send" class={style.button} />
            </MDBCol>
          </MDBRow>

      </MDBCol>
      <MDBCol lg='6' md='6'  xs='12' sm='6' className={style.colHeight} >
      <div className={style.text}>
                <p><VscLocation />Infomation technologies building,<br />Victoria Island, Lagos, Nigeria.</p>
                <p><AiFillPhone /> (123) 456-7890</p>
                <div className='social-media'>
                    <AiFillYoutube/>
                    <AiFillInstagram/>
                    <AiFillFacebook />
                    <AiFillTwitterSquare />
                </div>
                <img alt="Map" src={Map} className={style.Map} />
            </div> 
      </MDBCol>
    </MDBRow>
    </div>
  )
}
