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

      const FirstFormeData = [
        { value:formData.username, data: 'username' },
        { value: formData.email, data: 'email' },
        { value: formData.password, data: 'password' },
        { value: formData.address, data: 'address' },
        { value: formData.phone_number, data: 'phone_number' }
      ];

      const ShopFormeData = [
        { value: shopData.name, data: 'name' },
        { value: shopData.city, data: 'city' },
        { value: shopData.facebook_link, data: 'facebook_link' },
        { value: shopData.instagram_link, data: 'instagram_link' },
        { value: shopData.description, data: 'description' }
      ];

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
              {FirstFormeData.map((item) =>(
                <MDBCol md="6">
                <MDBInput
                    value={item.value}
                    name={item.data}
                    onChange={onChange}
                    id={item.data}
                    required
                    label={item.data}
                  />
                </MDBCol>
              ))}
 
            <MDBCol size="4" className={style.button_wrapper}>
                 <Button text="Next" />
            </MDBCol>
          </MDBRow>
          <CheckAccount text="Do you have an Account!" navigate="Login"  class={style.checkAccount}/>
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
          <CheckAccount text="Do you have an Account!" navigate="Login"  class={style.checkAccount}/>
          <Language/> 

        </MDBCol>} 

        {toNext == 3 &&
         <MDBCol lg='6' md='6' sm='6' xs='12'>
         <Logo class={style.logo}/>
         <Tittle Tittle="Welcome !"  class={style.Tittle}/>
         <SubTittle Tittle="Shope Info :"  class={style.ThirdFormSubTittle}/>

         <MDBRow tag="form" className={ ` ${style.thirdForm}`} onSubmit={(e) =>handelSubmit(e)}>
            {ShopFormeData.map((item) =>(
                <MDBCol md="10">
                <MDBInput
                    value={item.value}
                    name={item.data}
                    onChange={onChange}
                    id={item.data}
                    required
                    label={item.data}
                  />
                </MDBCol>
              ))}

            <MDBCol md="10">
            <div className={style.imgWrapper}>
                <p className={style.browse}>Drag shop image here, or <span>browse</span></p>
            </div>
            </MDBCol>           
         </MDBRow>
         <MDBCol size="12" className={style.submit_button}>
                <Button text="Submit" />
           </MDBCol>
         <CheckAccount text="Do you have an Account !" navigate="Login"  class={style.checkAccount}/>
         <Language/> 

       </MDBCol>
        }      
    </MDBRow>
  )
}

