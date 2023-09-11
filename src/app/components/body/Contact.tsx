"use client"
import axios from "axios";
import { useForm } from "react-hook-form";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import {FaMapMarkerAlt} from 'react-icons/fa'
const BASE_URL = 'https://formsubmit.co/ajax/'
const EMAIL = 'tomasalonsogg@gmail.com'
const TEL = '1154049512'
const TEL2 = '1154049512'
import {BiCheckCircle} from 'react-icons/bi'
import {useState} from 'react'
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
  const [showModal, setShowModal] = useState(false)
  const [submitModal, setSubmitModal] = useState(true)

  const defaultValues = {
    name: '',
     email: '',
    subject: '',
    description: '', 
    
  }
  const submit = (data: any) => {
    setSubmitModal(submitModal => false)
    postForm(data); 
    reset(defaultValues);
  }
  const postForm = (data: any) => {
    const URL =BASE_URL+EMAIL ;
    console.log(URL)
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios
      .post(URL, data)
      .then((res) => {
        setShowModal(showModal => true)
        setSubmitModal(submitModal => true)
      } )
      .catch((err) => console.log(err));
   
      };
  

  return (
  <div id="contact" className="relative w-screen z-0 Contact pt-20">
    <div className={` ${showModal ? 'grid opacity-100' : 'hidden opacity-0'} fixed top-1/2 left-1/2 z-50 modal shadow-white shadow-sm -translate-x-1/2 -translate-y-1/2 transition-all text-white p-6  bg-[#206caf] rounded-lg grid place-content-center text-center gap-1 transition ease-in-out delay-150`}>
        <BiCheckCircle className="text-white text-7xl text-center m-auto  "/>
        <h2 className="font-semibold text-xl">Formulario enviado</h2>
        <h3 className="opacity-70">En breve con comunicamos con usted</h3>
        <button className="bg-white text-[#206caf]  m-auto  p-1 px-3 rounded-lg mt-3 transition ease-in-out delay-150 hover:scale-110 " onClick={() => (setShowModal (showModal => false))} >Aceptar</button>
      </div>
    <section  className=" max-w-[900px] text-black bg-white bg-opacity-50 border border-[#206caf] rounded-[30px]   px-4 grid md:grid-cols-2 gap-4 m-2 md:mx-auto py-20  backdrop-blur-md	mb-52 z-0 ">

      
          <div className="relative z-0  ">
          <h1 className="font-[700] text-[24px]">Contacto</h1>
      
          <ul>
            <i className="flex items-center gap-3 pt-5 hover:scale-110 hover:text-[#206caf] hover:pl-5">
              <BsFillTelephoneFill />
              <span>
                <a href={`tel:+${TEL}`} > +{TEL}</a>
              </span>
            </i>
            <i className="flex items-center gap-3 py-5 hover:scale-110 hover:text-[#206caf] hover:pl-5">
              <BsFillTelephoneFill />
              <span>
                <a href={`tel:+${TEL2}`} > +{TEL2}</a>
              </span>
            </i>
            <li className="flex items-center gap-3 py-5 hover:scale-110 hover:text-[#206caf] hover:pl-5">
              <MdOutlineEmail />
              <a href={`mailto:${EMAIL}`} > {EMAIL}</a>
            </li>
          </ul>
         <article className="w-full ">
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.432194901502!2d-58.99106979999999!3d-34.05843350000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb0d91bb37bab1%3A0x3f4014618ab6cc9f!2sAserradero%20Alonso!5e0!3m2!1ses-419!2sar!4v1694405024854!5m2!1ses-419!2sar"
          //allowfullscreen
          className="rounded-md w-full max-h-full  md:min-h-[200px]  max-w-full  md:max-w-[600px]"
          loading="lazy"
          //referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="flex py-2"><FaMapMarkerAlt className="text-red-500 text-xl"/> Campana, Provincia de Buenos Aires</p>
         </article>
          </div>
          <div className="relative ">
            
          <h2 className="text-[20px] font-[600] pt-[25px]">
         Tiene alguna duda o consulta? Por favor complete el formulario.

          </h2>
          
          <form onSubmit={handleSubmit(submit)} className="my-[10px] z-30  ">
            <input
              type="text"
              id="name"
              placeholder="Nombre"
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2   placeholder:text-black border border-[#206caf] my-[10px] focus:bg-white focus:text-[#206caf] focus:outline-none   disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:border-green-500
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500  "
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
              placeholder="Correo "
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2   placeholder:text-black border border-[#206caf] my-[10px] focus:bg-white focus:text-[#206caf] focus:outline-none   disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:border-green-500
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
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
              placeholder="Asunto"
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2   placeholder:text-black border border-[#206caf] my-[10px] focus:bg-white focus:text-[#206caf] focus:outline-none   disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:border-green-500
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
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
              placeholder="Mensaje"
              className="bg-[#ffffff4d] rounded-[10px] w-full p-2   placeholder:text-black border border-[#206caf] my-[10px] focus:bg-white focus:text-[#206caf] focus:outline-none   disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:border-green-500
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
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
              className={` ${submitModal ? 'block' : 'hidden'} cursor-disabled  block m-auto h-[50px]  px-5 bg-[#206caf] shadow-black shadow-md  text-white border-[#206caf] border-2      rounded-[10px]  text-[17px] mt-[10px] font-[400]  z-20 transition ease-in-out delay-150 hover:scale-110` } 
              
            >
              {" "}
              Enviar mensaje{" "}
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