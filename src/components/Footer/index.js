import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import style from './style.module.css'
import {LayoutLogo} from "../LayoutLogo";
import { AiFillPhone } from "react-icons/ai";
import { VscLocation } from "react-icons/vsc";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube} from "react-icons/ai";
import { AiFillInstagram} from "react-icons/ai";
import { AiOutlineGooglePlus} from "react-icons/ai";



export default function Footer() {
  return (
    <MDBFooter bgColor='light' className={` text-center text-lg-left ${style.footer}`}>
      <MDBContainer className='p-4'>
        <MDBRow className={style.row_height}>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <LayoutLogo class="logo" />
          </MDBCol>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
             <div className={style.text}>
                <p><VscLocation /> 345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
                <p><AiFillPhone /> (123) 456-7890</p>
                <div className={style.social_media}>
                    <AiFillFacebook />
                    <AiFillTwitterSquare />
                    <AiFillLinkedin/>
                    <AiFillYoutube/>
                    <AiFillInstagram/>
                    <AiOutlineGooglePlus />
                </div>
                <p className={style.copyright}>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
            </div> 
          </MDBCol>
          <hr className={style.separator}></hr>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}