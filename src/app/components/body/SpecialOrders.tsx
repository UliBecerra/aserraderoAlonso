"use client"
import React from 'react'
import { Satisfy } from "next/font/google";
import Image from "next/image";
import imgTacos from "../../../../public/images/tacos.jpeg"
import imgCepillado from "../../../../public/images/cepilloparamadera.jpg"
import imgFlete from "../../../../public/images/flete.png"
const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });
import { Link } from "react-scroll"

export default function SpecialOrders() {
  return (
    <article className='pt-[150px] min-h-screen overflow-hidden' id='special-orders'>
       <h1
        className={`${satisfy.className} text-5xl font-semibold text-[#206caf] p-4 text-center`}
      >SpecialOrders{/*  */}</h1>
       <ul className='flex flex-wrap gap-6 p-4 justify-center text-center'>
        <article className=" bg-[#206caf] text-white p-4 grid gap-3 place-content-center max-w-[350px] rounded-xl">
          <h2 className="text-white font-bold">Cepillado de tablas</h2>
          <div className="relative max-h-60 max-w-[330] overflow-hidden flex justify-center  ">
            <Image
              src={imgCepillado}
              className="z-0"
              objectFit="cover"
              alt="Picture of poplar boards"
            />
           
               
          </div>
         
          <Link to={'contact'} smooth={true} className=" p-3 m-auto rounded-xl  hover:text-white transition ease-in-out delay-150 hover:bg-[#206caf] hover:-translate-y-1 hover:scale-110 bg-white text-[#206caf] border border-white duration-300">
            {" "}
            Conoce mas{" "}
          </Link>
        </article>
        <article className=" bg-[#206caf] text-white p-4 grid gap-3 place-content-center max-w-[350px] rounded-xl">
          <h2 className="text-white font-bold">Tacos</h2>
          <div className="relative max-h-60 max-w-[330] overflow-hidden flex justify-center rounded-md ">
            <Image
              src={imgTacos}
              className="z-0"
              objectFit="cover"
              alt="Picture of poplar boards"
            />
           
               
          </div>
         
          <Link to={'contact'} smooth={true} className=" p-3 m-auto rounded-xl  hover:text-white transition ease-in-out delay-150 hover:bg-[#206caf] hover:-translate-y-1 hover:scale-110 bg-white text-[#206caf] border border-white duration-300">
            {" "}
            Conoce mas{" "}
          </Link>
        </article>
        <article className=" bg-[#206caf] text-white p-4 grid gap-3 place-content-center max-w-[350px] rounded-xl">
          <h2 className="text-white font-bold ">Fletes</h2>
          <div className="relative max-h-60 max-w-[330] overflow-hidden flex justify-center rounded-md ">
            <Image
              src={imgFlete}
              className="z-0"
              objectFit="cover"
              alt="Picture of poplar boards"
            />
           
               
          </div>
         
          <Link to={'contact'} smooth={true} className=" p-3 m-auto rounded-xl  hover:text-white transition ease-in-out delay-150 hover:bg-[#206caf] hover:-translate-y-1 hover:scale-110 bg-white text-[#206caf] border border-white duration-300">
            {" "}
            Conoce mas{" "}
          </Link>
        </article>
      </ul>
      </article>
  )
}
