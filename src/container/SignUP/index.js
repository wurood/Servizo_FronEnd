import React, { useState, useRef } from 'react'
import style from './style.module.css'
import { useNavigate } from "react-router-dom";
import { MDBRow, MDBCol, MDBInput, MDBRadio } from 'mdb-react-ui-kit';
import { SideImage } from '../../components/SideImage'
import { Logo } from '../../components/Logo'
import { Tittle } from '../../components/Tittle'
import { SubTittle } from '../../components/SubTittle'
import { Language } from '../../components/Language'
import { CheckAccount } from '../../components/CheckAccount'
import { Button } from '../../components/Button'
import axios from 'axios';
import { saveImage } from './SaveImage';

export const SignUP = () => {
  const [toNext, setNext] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const type = "user";

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
    phone_number: '',
    type: type,

  });

  const [shopData, setShopData] = useState({
    name: '',
    admin_id: '',
    city: '',
    facebook_link: '',
    instagram_link: '',
    description: '',
    img: ''
  });

  const FirstFormeData = [
    { value: formData.username, data: 'username' },
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
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile)
    console.log(file)
  };

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(file)
  //   saveImage(file);
  // };
  
  const handelNext = (e) => {
    e.preventDefault();
    setNext(2);
  }

  const register = async () => {
    try {
      setIsLoading(true);

      const userResponse = await axios.post('http://localhost:8000/api/auth/register',
        {
          name: formData.username,
          email: formData.email,
          password: formData.password,
          address: formData.address,
          phone_number: formData.phone_number,
          type: formData.type
        }
      );
      setData(userResponse.data)

      if (formData.type === 'shop') {
        addShop(userResponse.data.user.id)
      }

      setIsLoading(false);
      navigate('/login');
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);

    }
  };
  const addShop = async (adminId) => {

    const shopeResponse = await axios.post('http://localhost:8000/api/shop/add',
      {
        name: shopData.name,
        admin_id: adminId,
        city: shopData.city,
        description: shopData.description,
        facebook_link: shopData.facebook_link,
        instagram_link: shopData.instagram_link
      }
    );
    storeImages(shopData.name)
    // console.log(shopeResponse.data)
  }
  const handelSecondForm = (e) => {
    e.preventDefault();
    console.log(formData.type)
    if (formData.type == 'shop') {
      setNext(3);
    } else {
      //handel backend registration
      register();
    }
  }
  const handelSubmit = (e) => {
    console.log("heeel")
    e.preventDefault();
    //handel backend registration
    register();

  }

    const storeImages = async (companyName) => {
      let imageData = new FormData();
    imageData.append(`images`, file);
    imageData.append("companyName", companyName);
    console.log(imageData)
    // for (var [key, value] of imageData.entries()) { 
    //   console.log(key, value);
    //  }
    const shopeImageResponse = await axios.post('http://localhost:8000/api/shop/store',imageData);
    }


  return (
    <MDBRow className={style.row}>
      <MDBCol lg='6' md='6' sm='6' className={style.sideImage} >
        <SideImage />
      </MDBCol>
      {toNext == 1 &&
        <MDBCol lg='6' md='6' sm='6' xs='12'>
          <Logo class={style.logo} />
          <Tittle Tittle="Welcome !" class={style.Tittle} />

          <MDBRow tag="form" className={` ${style.form}`} onSubmit={(e) => handelNext(e)}>
            {FirstFormeData.map((item) => (
              <MDBCol md="6">
                <MDBInput
                  value={item.value}
                  name={item.data}
                  onChange={onChange}
                  id={item.data}
                  required
                  label={item.data}
                  type={item.data}
                />
              </MDBCol>
            ))}

            <MDBCol size="4" className={style.button_wrapper}>
              <Button text="Next" />
            </MDBCol>
          </MDBRow>
          <CheckAccount text="Do you have an Account!" navigate="Login" class={style.checkAccount} />
          <Language />

        </MDBCol>}
      {toNext == 2 &&
        <MDBCol lg='6' md='6' sm='6' xs='12'>
          <Logo class={style.logo} />
          <Tittle Tittle="Welcome !" class={style.Tittle} />
          <SubTittle Tittle="Register As :" class={style.SubTittle} />

          <MDBRow tag="form" className={` ${style.secondForm}`} onSubmit={(e) => handelSecondForm(e)}>
            <MDBCol md="6">
              <MDBRadio className={style.form_check} name='type' value='user' id='flexRadioDefault1' label='User' onChange={onChange} defaultChecked />
              <MDBRadio className={style.form_check} name='type' value='shop' id='flexRadioDefault2' label='Shop' onChange={onChange} />
            </MDBCol>

            <MDBCol size="4" className={style.button_wrapper}>
              {isLoading ?
                <span class="loader"></span>
                :
                <Button text="Next" />
              }
            </MDBCol>
          </MDBRow>
          <CheckAccount text="Do you have an Account!" navigate="Login" class={style.checkAccount} />
          <Language />

        </MDBCol>}

      {toNext == 3 &&
        <MDBCol lg='6' md='6' sm='6' xs='12'>
          <Logo class={style.logo} />
          <Tittle Tittle="Welcome !" class={style.Tittle} />
          <SubTittle Tittle="Shope Info :" class={style.ThirdFormSubTittle} />

          <MDBRow tag="form" className={` ${style.thirdForm}`} onSubmit={(e) => handelSubmit(e)}>
            {ShopFormeData.map((item) => (
              <MDBCol md="10">
                <MDBInput
                  value={item.value}
                  name={item.data}
                  onChange={onChangeShop}
                  id={item.data}
                  required
                  label={item.data}
                />
              </MDBCol>
            ))}

            <MDBCol md="10">
              <div className={style.imgWrapper}>
                <p className={style.browse} >Drag shop image here, or <span  onClick={() => fileInputRef.current.click()}>browse</span></p>
                {/* <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          
                          style={{ display: "none" }}
                        /> */}
                        <br />
              <input type="file"  ref={fileInputRef} name="fileInput" accept=".jpg,.png,.pdf" onChange={handleFileChange}  style={{ display: "none" }} />

              </div>
            </MDBCol>
            <MDBCol MDBCol size="12" className={style.submit_button}>
              {isLoading ?
                <span class="loader"></span>
                :
                <Button type="submit" text="Submit" />
              }
            </MDBCol>
          </MDBRow>

          <CheckAccount text="Do you have an Account !" navigate="Login" class={style.checkAccount} />
          <Language />

        </MDBCol>
      }
    </MDBRow>
  )
}
