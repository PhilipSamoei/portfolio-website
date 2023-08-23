import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/Contact.css';


function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted');
    reset();
  };


  return (
    <div className="grid grid-cols-2 gap-10">
      <div >
      <h1 className="text">Let's get in touch</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <input type="text" {...register('name',{
            required:{
                value: true,
                message: 'Please enter your name'
            },

          })} placeholder="Name" className="form-input" />
          <p className="error"> {errors.name?.message}</p>
          <input type="email" {...register('email',{
            required:{
                value: true,
                message: 'Please enter your email'
            },
          })} placeholder="Email" className="form-input" />
          <p className="error"> {errors.email?.message}</p>
          <input type="tel" {...register('phone',{
          required:{
                value: true,
                message: 'Please enter your phone number'
          }},
          
          )} placeholder="Phone" className="form-input" />
          <p className="error"> {errors.phone?.message}</p>
          <textarea {...register('message',
          {
            required:{
                value: true,
                message: 'Please enter your message'
            },
          })} placeholder="Message" className="form-textarea" />
          <p className="error"> {errors.message?.message}</p>

         <button  className="submit"> Submit</button> 
         </form>
      </div>
            
    </div>
  );
}

export default ContactMe;



