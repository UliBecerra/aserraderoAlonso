"use client";
import React, { useState, useEffect } from "react";
import { Comfortaa } from "next/font/google";
import Link from "next/link";
import Image from 'next/image'
import bg from "../../../public/images/IMG-20230905-WA0009.jpg";
//const comfortaa = Comfortaa({
//subsets: ['latin'],
//variable: '--font-Confortaa' })

const comfortaa = Comfortaa({ subsets: ["latin"] });
const links = [
  {
    label: "Productos",
    route: "/products",
  },
  {
    label: "Pedidos especiales",
    route: "/special-orders",
  },
  {
    label: "Historia",
    route: "/history",
  },
  {
    label: "Contacto",
    route: "/contact",
  },
];
export default function Header() {

const [scroll, setScroll] = useState(true)
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
    <article >
      <div
      
        className={`min-h-[calc(100vh_-_80px)] min-w-screen bg-cover  bg-center bg-opacity-70 z-20 relative`}
      
      >
        <Image
          src={'/images/IMG-20230905-WA0009.jpg'}
          fill={true}
          layout="fill"
          objectFit="cover"
          className="opacity-80"
          alt="Background image "
          priority={true}
          
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 grid gap-3">
        <h2 className=" text-white z-10 font-bold text-3xl shadow-md ">
        {`"La calidad que corta a la competencia"`}
        </h2>
        <button className="bg-[#5f9bce] p-4 font-semibold block m-auto rounded-xl cursor-pointer hover:bg-[#206caf] transition ease-in-out delay-150 hover:scale-110 " >
              OBTENER PRESUPUESTO
            </button>
        </div>
      </div>
      <div className={`${!scroll ? 'fixed top-0 w-full' : 'block'}  z-20 grid grid-cols-2 bg-slate-50 text-center text-3xl text-[#5f9bce]  py-4 duration-500 `}>
        <div className="flex items-center ">
          <button
            className="flex flex-col h-12 w-12   rounded justify-center items-center group hover:text-[gray]"
            onClick={() => setIsOpen(!isOpen)}
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
          <h1
            className={`${comfortaa.className} hover:text-[gray] drop-shadow-lg cursor-pointer`}
          >
            {" "}
            Aserradero Alonso S.A.{" "}
          </h1>
        </div>

        {/* 
        <ul className=" flex gap-6 text-xl justify-end items-center drop-shadow pr-4">
          <li className="hover:text-[gray] cursor-pointer"></li>
          <li className="hover:text-[gray] cursor-pointer">Pedidos especiales</li>
          <li className="hover:text-[gray] cursor-pointer">Historia</li>
          <li className="hover:text-[gray] cursor-pointer">Contacto</li>
        </ul> */}
        <ul className=" flex gap-6 text-xl justify-end items-center drop-shadow pr-4">
          {links.map(({ label, route }) => (
            <Link
              className="hover:text-[gray] cursor-pointer"
              href={route}
              key={route}
            >
              <li>{label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </article>
  );
}
