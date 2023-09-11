"use client";
import React from "react";
import { Satisfy } from "next/font/google";
import Image from "next/image";
const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });
import imgTables from "../../../../public/images/tablasAlamo.jpg";
import { Link } from "react-scroll";
//import imgTables from "../../../../public/images/IMG-20230905-WA0009.jpg";

export default function Products() {
  return (
    <article className="p-4 pt-[120px] pb-[100px] grid place-content-center text-center" id="products">
      <h1
        className={`${satisfy.className} text-5xl font-semibold text-[#206caf] p-4`}
      >
        Productos
      </h1>
      <ul>
        <article className=" bg-white text-black p-4 grid gap-3 place-content-center max-w-[350px]">
          <h2 className="text-[rgb(0,0,0)] font-bold">Tablas de Alamo</h2>
          <div className="relative max-h-60 max-w-[330] overflow-hidden flex justify-center  ">
            <Image
              src={imgTables}
              className="z-0"
              objectFit="cover"
              alt="Picture of poplar boards"
            />
            <div className="absolute bg-white bg-opacity-70 flex items-center gap-1 px-1 left-0">
              <div className="h-4 w-4 rounded-full bg-green-500 ">
              <div className="h-4 w-4 rounded-full bg-green-500 animate-[ping_2s_cubic-bezier(0,_0,_0.2,_1)_infinite] absolute">
              </div>
                </div>{" "}
              Disponible
            </div>
          </div>
          <ul className="text-left block">
            <li>
              {" "}
              <span className="font-bold">Largo</span>: 2.10 mts.
            </li>

            <li>
              <span className="font-bold">Espesores</span>: 1/2, 1, 1.5 y 2
              pulgadas
            </li>

            <li>
              <span className="font-bold">Anchos</span>: stock variable de 3 a
              10 pulgadas
            </li>

            <li className="font-bold">
              <span>Sin cepillado</span>
            </li>
          </ul>
          <Link to={'contact'} smooth={true} className="  p-3 m-auto rounded-xl hover:opacity-2 text-white transition ease-in-out delay-150 bg-[#206caf] hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#206caf] hover:border hover:border-[#206caf] duration-300">
            {" "}
            Conoce mas{" "}
          </Link>
        </article>
      </ul>
    </article>
  );
}
