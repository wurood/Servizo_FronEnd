
import React, { useState ,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import style from './style.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { MDBRow, MDBCol,MDBInput  } from 'mdb-react-ui-kit';
import {SideImage} from '../../components/SideImage'
import {Logo} from '../../components/Logo'
import{Tittle} from '../../components/Tittle'
import {SubTittle} from '../../components/SubTittle'
import {Language} from '../../components/Language'
import {CheckAccount} from '../../components/CheckAccount'
import {Button} from '../../components/Button'
import axios from 'axios';

export const Login = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchData = async () => {
    try {
      toast.success('Look at my styles.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });

      setIsLoading(true);

      const response = await axios.post('http://localhost:8000/api/auth/login',
      {
          email: formData.email,
          password: formData.password,
      }
      );
      if(response.data.status === 'success'){
        setData(response.data);
        console.log(response.data.user)
        const userJson = JSON.stringify(response.data.user);
        localStorage.setItem("user",userJson);
        setIsLoading(false);
        navigate('/shopes');
      }else{
        toast('Here is your toast.')
      }
 
    } catch (error) {
      console.error('Error fetching data:', error);

      setIsLoading(false);

    }
  };

  const handelSubmit = (e) =>{
    e.preventDefault();
    fetchData();
  }

  return (
    <>
  
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
            {isLoading ? 
              <span class="loader"></span>
              :
              <Button text="Login" />
            }

            </MDBCol>
          </MDBRow>
          <CheckAccount text="Don’t have Account !" navigate=" Register" />
          <Language/> 

      </MDBCol>
    </MDBRow>
  
    </>
  )
}
