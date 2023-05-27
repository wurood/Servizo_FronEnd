import React ,{useState} from 'react'
import style from './style.module.css'
import { MDBRow, MDBCol,MDBInput ,MDBRadio  } from 'mdb-react-ui-kit';
import {Button} from '../../components/Button'

export const RequestForm = () => {

    const [formData, setFormData] = useState({
        name:'',
        address: '',
        email: '',
        order_name:'',
        price:'',
        order_number:'',
        description:'',
        // img:''

      });

      const FirstFormeData = [
        { value:formData.name, data: 'name' },
        { value: formData.address, data: 'address' },
        { value: formData.email, data: 'email' },
        { value: formData.order_name, data: 'order_name' },
        { value: formData.price, data: 'price' },
        { value: formData.order_number, data: 'order_number' },
        { value: formData.description, data: 'description' },
        // { value: formData.img, data: 'img' },

      ];
      const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handelSubmit = (e) =>{
        e.preventDefault();
            //handel backend registration
      }

  return (
    // <div className={style.form}>
    // </div>
    <div className={style.contact_form_wrapper}>
        <p className={style.title}>Add A New  Purchase order from <span>Fairies</span></p>

     <MDBRow tag="form" className={ ` ${style.input_form}`} onSubmit={(e) =>handelSubmit(e)}> 
    {FirstFormeData.map((item) =>(
    <>
        {item.data  == 'description'
        ?
        <MDBCol md="10" className={style.input}>
        <span className={style.label}>{item.data}<span className={style.star}>*</span></span>

      <MDBInput
          value={item.value}
          name={item.data}
          onChange={onChange}
          id={item.data}
          required
          className={style.description}
        />
        </MDBCol>
        
        :
        <MDBCol md="5" className={style.input}>
           <span className={style.label}>{item.data}<span className={style.star}>*</span></span>

        <MDBInput
        value={item.value}
        name={item.data}
        onChange={onChange}
        id={item.data}
        required
      />
      </MDBCol>
     }
   </>
 
    ))}
         <MDBCol md="10" className={style.input}>
         <span className={style.label}>Upload Photos</span>

         <div className={style.imgWrapper}>
                <p className={style.browse}>Drag shop image here, or <span>browse</span></p>
            </div>
         </MDBCol>
         <MDBCol size="12" >
                <Button text="Add New Order" class={style.submit_button} />
           </MDBCol>
     </MDBRow> 
    </div>
    
  )
}