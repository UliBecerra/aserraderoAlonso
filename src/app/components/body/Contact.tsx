"use client"
import axios from "axios";
import { useForm } from "react-hook-form";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const BASE_URL = 'https://formsubmit.co/ajax/'
const EMAIL = 'aserradero@alonso.com'
const TEL = '123456789'
interface FormData {
  username: string;
  name: string
  email: string
  subject: string
  message: string
  description: string
  // Define otros campos del formulario aquí
}

export default function Contact() {
  const { register, handleSubmit, reset, formState } = useForm<FormData>();

  const defaultValues = {
    name: '',
     email: '',
    subject: '',
    message: '', 
    
  }
  const submit = (data: any) => {
    postForm(data); 
    reset(defaultValues);
  }
  const postForm = (data: any) => {
    const URL =BASE_URL+EMAIL ;
    console.log(URL)
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios
      .post(URL, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
   
      };
  

  return (
  <div id="contact" className="relative w-screen z-20 Contact ">
    
    <section  className=" max-w-[900px] text-white bg-[rgba(47,_47,_138,_0.6)] rounded-[30px]   px-4 grid md:grid-cols-2 m-2 md:mx-auto py-20 z-20 backdrop-blur-md	mb-52 ">
      
          <div className="relative z-10  ">
          <h1 className="font-[700] text-[24px]">Get in touch</h1>
     
          <ul>
            <i className="flex items-center gap-3 py-5">
              <BsFillTelephoneFill />
              <span>
                <a href=""> +{TEL}</a>
              </span>
            </i>
            <li className="flex items-center gap-3 py-5">
              <MdOutlineEmail />
              <a href=""> {EMAIL}</a>
            </li>
          </ul>
          </div>
          <div className="relative ">
            
          <h2 className="text-[23px] font-[700] pt-[25px]">
            Send me a message
          </h2>
          
          <form onSubmit={handleSubmit(submit)} className="my-[10px] z-30  ">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2  placeholder-white my-[10px]"
              {...register("name", 
              {required: {
                value:true,
                message:'Your must enter your first name'
              },
              minLength:{
                value: 2,
                message: 'Name very short'
              },
              
              })}
            />
 {formState.errors.name ? (
          <p className="text-red-500 text-sm mt-1">{formState.errors.name.message}</p>
        ) : ''}            <input
              type="email"
/*               name="email"
 */              id="emial"
              required
              placeholder="Email adresss "
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2  placeholder-white my-[10px]"
              {...register("email", 
            {required: {
              value:true,
              message:'Your must enter your email'
            },
            minLength:{
              value: 1,
              message: 'Email very short'
            },
            maxLength:{
              value:150,
              message: 'Email very long'
            }
            })}
            />
             {formState.errors.username ? (
          <p className="text-red-500 text-sm mt-1">{formState.errors.username.message}</p>
        ) : ''}
            <input
              type="text"
/*               name="subject"
 */              id="subject"
              placeholder="Subject"
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2  placeholder-white m     my-[10px]"
              {...register("subject", 
            {required: {
              value:true,
              message:'Please enter your subject'
            },
            minLength:{
              value: 2,
              message: 'Subject very short'
            }
            
            })}
            />
 {formState.errors.username ? (
          <p className="text-red-500 text-sm mt-1">{formState.errors.username.message}</p>
        ) : ''}            <textarea
/*               name="description"
 */              id="message"
              placeholder="Your message"
              className="bg-[#ffffff4d] rounded-[10px] w-full h-[150px] p-2  placeholder-white py-[10px] z-40"
              {...register("description", 
            {required: {
              value:true,
              message:'Please enter your message'
            }
            
            })}
            >
            </textarea>
            {formState.errors.username ? (
          <p className="text-red-500 text-sm mt-1">{formState.errors.username.message}</p>
        ) : ''}
            <button
              type="submit"
              value="Send message"
              className=" block m-auto h-[50px]  px-5  bg-gradient-to-br from-[#C961DE] to-[#2954A3]   rounded-[10px] text-white text-[17px] mt-[10px] font-[400]  z-20"
            >
              {" "}
              send message{" "}
            </button>
            
          </form>

          {/* Form submit */}
        
          </div>
         

        </section>
        
        </div>
  )
}

/* import React from 'react'

export default function Contact() {
  return (
    <article className='min-h-screen'>
      <h2>Contacto</h2>
      <h3>Tiene alguna duda o consulta? Por favor complete el siguiente formulario</h3>

      <div className="flex flex-wrap">
        <form action=""></form>
      </div>
    </article>
  )
}
 */