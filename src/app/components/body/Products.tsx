import React from 'react'
import {Satisfy} from 'next/font/google'
const satisfy = Satisfy({ subsets: ["latin"], weight: '400' })
;
export default function Products() {
  return (
    <article className='p-4 pt-12 grid place-content-center text-center'>
      <h1 className={`${satisfy.className } text-5xl font-semibold text-[#206caf]`}>Productos</h1>
      <h2 className='text-[black]'>Tablas de Alamo</h2>
      <ul>
        <article>
        Largo: 2.10 mts.

Espesores: 1/2, 1, 1.5 y 2 pulgadas

Anchos: stock variable de 3 a 10 pulgadas

Sin cepillado
        </article>
      </ul>
    </article>
  )
}
