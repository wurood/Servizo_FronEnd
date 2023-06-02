import React, { useState ,useEffect } from 'react'
import style from './style.module.css'
import { MDBRow, MDBCol,MDBInput ,MDBRadio  } from 'mdb-react-ui-kit';
import {SideImage} from '../../components/SideImage'
import {Logo} from '../../components/Logo'
import{Tittle} from '../../components/Tittle'
import {SubTittle} from '../../components/SubTittle'
import {Language} from '../../components/Language'
import {CheckAccount} from '../../components/CheckAccount'
import {Button} from '../../components/Button'

export const SignUP = () => {
    const [toNext, setNext] = useState(1);
    const [isShop, setIsShop] = useState(false);
    const type = "user";

    const [formData, setFormData] = useState({
        username:'',
        email: '',
        password: '',
        address:'',
        phone_number:'',
        type:type,

      });

      const [shopData, setShopData] = useState({
        name:'',
        admin_id:'',
        city: '',
        facebook_link:'',
        instagram_link:'',
        description: '',
        img:''
      });
    
      const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const onChangeShop = (e) => {
        setShopData({ ...shopData, [e.target.name]: e.target.value });
      };
      const handelNext = (e) =>{
        e.preventDefault();
        setNext(2);
      }
      const handelSecondForm = (e) =>{
        e.preventDefault();
        console.log(formData.type)
        if(formData.type == 'shop'){
            setNext(3);
        }else{
            //handel backend registration
        }
      }
      const handelSubmit = (e) =>{
        e.preventDefault();
            //handel backend registration
      }
  return (
    <MDBRow className={style.row}>
        <MDBCol lg='6' md='6' sm='6'  className={style.sideImage} >
           <SideImage />
        </MDBCol>
        {toNext == 1 &&
        <MDBCol lg='6' md='6' sm='6' xs='12'>
          <Logo class={style.logo}/>
          <Tittle Tittle="Welcome !"  class={style.Tittle}/>

          <MDBRow tag="form" className={ ` ${style.form}`} onSubmit={(e) =>handelNext(e)}>
            <MDBCol md="6">
            <MDBInput
                value={formData.username}
                name='username'
                onChange={onChange}
                id='username'
                required
                label='username'
              />
            </MDBCol>
            <MDBCol md="6">
            <MDBInput
                value={formData.email}
                name='email'
                onChange={onChange}
                id='email'
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
                id='password'
                required
                label='password'
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                value={formData.address}
                type='address'
                name='address'
                onChange={onChange}
                id='address'
                required
                label='address'
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBInput
                value={formData.phone_number}
                type='phone_number'
                name='phone_number'
                onChange={onChange}
                id='phone_number'
                required
                label='phone number'
              />
            </MDBCol>
            <MDBCol size="4" className={style.button_wrapper}>
                 <Button text="Next" />
            </MDBCol>
          </MDBRow>
          <CheckAccount text="Don’t have Account !" navigate="Login"  class={style.checkAccount}/>
          <Language/> 

        </MDBCol>}
        {toNext == 2 &&
        <MDBCol lg='6' md='6' sm='6' xs='12'>
          <Logo class={style.logo}/>
          <Tittle Tittle="Welcome !"  class={style.Tittle}/>
          <SubTittle Tittle="Register As :"  class={style.SubTittle}/>

          <MDBRow tag="form" className={ ` ${style.secondForm}`} onSubmit={(e) =>handelSecondForm(e)}>
            <MDBCol md="6">
            <MDBRadio  className={style.form_check} name='type'  value='user' id='flexRadioDefault1' label='User' onChange={onChange} defaultChecked  />
            <MDBRadio className={style.form_check} name='type' value='shop'  id='flexRadioDefault2' label='Shop' onChange={onChange}  />
            </MDBCol>
            
            <MDBCol size="4" className={style.button_wrapper}>
                 <Button text="Next" />
            </MDBCol>
          </MDBRow>
          <CheckAccount text="Don’t have Account !" navigate="Login"  class={style.checkAccount}/>
          <Language/> 

        </MDBCol>} 

        {toNext == 3 &&
         <MDBCol lg='6' md='6' sm='6' xs='12'>
         <Logo class={style.logo}/>
         <Tittle Tittle="Welcome !"  class={style.Tittle}/>
         <SubTittle Tittle="Shope Info :"  class={style.ThirdFormSubTittle}/>

         <MDBRow tag="form" className={ ` ${style.thirdForm}`} onSubmit={(e) =>handelSubmit(e)}>
         <MDBCol md="10">
            <MDBInput
                value={shopData.name}
                name='name'
                onChange={onChangeShop}
                id='name'
                required
                label='name'
              />
            </MDBCol>
            <MDBCol md="10">
            <MDBInput
                value={shopData.city}
                name='city'
                onChange={onChangeShop}
                id='city'
                required
                label='city'
              />
            </MDBCol>
            <MDBCol md="10">
            <MDBInput
                value={shopData.facebook_link}
                name='facebook_link'
                onChange={onChangeShop}
                id='facebook_link'
                required
                label='facebook_link'
              />
            </MDBCol>
            <MDBCol md="10">
            <MDBInput
                value={shopData.instagram_link}
                name='instagram_link'
                onChange={onChangeShop}
                id='instagram_link'
                required
                label='instagram_link'
              />
            </MDBCol>
            <MDBCol md="10">
            <MDBInput
                value={shopData.description}
                name='description'
                onChange={onChangeShop}
                id='description'
                required
                label='description'
                className={style.description}
              />
            </MDBCol>
            <MDBCol md="10">
            <div className={style.imgWrapper}>
                <p className={style.browse}>Drag shop image here, or <span>browse</span></p>
            </div>
            </MDBCol>           
         </MDBRow>
         <MDBCol size="12" className={style.submit_button}>
                <Button text="Submit" />
           </MDBCol>
         <CheckAccount text="Don’t have Account !" navigate="Login"  class={style.checkAccount}/>
         <Language/> 

       </MDBCol>
        }      
    </MDBRow>
  )
}

