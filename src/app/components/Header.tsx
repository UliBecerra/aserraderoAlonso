"use client";
import React, { useState, useEffect } from "react";
import { Comfortaa } from "next/font/google";
import { Link } from "react-scroll"
import * as Scroll from 'react-scroll';
import Image from 'next/image'
import bg from "../../../public/images/IMG-20230905-WA0009.jpg";
//const comfortaa = Comfortaa({
//subsets: ['latin'],
//variable: '--font-Confortaa' })


const comfortaa = Comfortaa({ subsets: ["latin"] });
const links = [
  {
    label: "Productos",
    route: "products",
  },
  {
    label: "Pedidos especiales",
    route: "special-orders",
  },
  {
    label: "Historia",
    route: "history",
  },
  {
    label: "Contacto",
    route: "contact",
  },
];
export default function Header() {
const [scroll, setScroll] = useState(true)
const [modalNav, setModalNav] = useState(false)
useEffect(() => {
  
  
  window.addEventListener("scroll", function(){
    if(window.scrollY > Math.floor(window.innerHeight - 90)){
      setScroll(scroll => false)
    }else{
      setScroll(scroll => true)
    }
  })

},[])
//const [onScroll, setOnScroll] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const genericHamburgerLine = `h-[2px] w-6 my-[2px] rounded-full bg-[#309eff] transition ease transform duration-300`;
  `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  //IMG-20230905-WA0009
  return (
    <article className="max-w-[100vw] " id="header">
      
      <div
      
        className={`min-h-[calc(100vh_-_88px)] min-w-screen  bg-cover  bg-center bg-opacity-70 z-20 relative`}
      
      >
        <Image
          src={'/images/IMG-20230905-WA0009.jpg'}
          fill={true}
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          alt="Background image "
          priority={true}
          
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 grid gap-3">
        <h2 className=" text-white z-10 font-bold text-3xl shadow-md ">
        {`"La calidad que corta a la competencia"`}
        </h2>
        <Link to={'contact'} smooth={true} className="bg-[#5f9bce] p-4 font-semibold block m-auto rounded-xl cursor-pointer hover:bg-[#206caf] transition ease-in-out delay-150 hover:scale-110 " >
              OBTENER PRESUPUESTO
            </Link>
        </div>
      </div>
      <div className={`${!scroll ? 'fixed top-0 ' : 'block'} w-full z-20 grid md:grid-cols-2 bg-slate-50 text-center  text-[#5f9bce]  py-4 duration-500  `}>
        <div className="flex w-full  items-center justify-around ">
         
          <Link to='header'
            className={`block ${comfortaa.className} text-xl md:text-3xl hover:text-[gray] drop-shadow-lg cursor-pointer`}
           smooth={true}>
            {" "}
            Aserradero Alonso S.A.{" "}
          </Link>
          <button
            className="flex flex-col h-12 w-12   rounded justify-center items-center group hover:text-[gray] md:hidden"
            onClick={() => {
              setIsOpen(!isOpen)
              setModalNav(!modalNav)
            }}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-[6px] opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-[6px] opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>

        
        <ul className={`${modalNav ? 'py-4 h-auto' : ' h-0 md:h-auto'} flex  md:flex gap-6 text-xl justify-end items-center drop-shadow pr-4 transition-all duration-300`}>

          {links.map(({ label, route }) => (
            <Link
              className={`${modalNav ? '': 'hidden md:flex'} block hover:text-[gray] transition-all cursor-pointer `}
              to={route}
              key={route}
              smooth= {true}
            >
              <li>{label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </article>
  );
}
