import React from 'react'
import { Satisfy, Abhaya_Libre } from "next/font/google";
 import Image from "next/image";
import imgTables from "../../../../public/images/IMG-20230905-WA0003.jpg"
/*import imgCepillado from "../../../../public/images/cepilloparamadera.jpg"
import imgFlete from "../../../../public/images/flete.png" */
const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });
const abhayaLibre = Abhaya_Libre({subsets: ["latin"], weight:'400'})
export default function History() {
  return (
    <article className='min-h-screen'>
     
     <h2 className={`${satisfy.className}  text-5xl font-semibold text-[#206caf] p-4`}>Historia</h2>
     <div className="flex flex-wrap">
      
      <p className={`${abhayaLibre.className} p-4 text-xl text-black`}>
      Con una trayectoria de 15 años en la industria, nuestro aserradero ha sido testigo de la evolución constante y el crecimiento sostenido en la producción de productos de madera de alta calidad (Taxodium y Roble). Durante esta extensa travesía, hemos perfeccionado nuestro arte de transformar troncos en auténticas obras maestras de la madera. Cada día, nuestros conocimientos y experiencia han madurado, permitiéndonos enfrentar desafíos con confianza y satisfacer las demandas cambiantes del mercado con una habilidad excepcional. A lo largo de estas décadas, nuestro compromiso con la calidad, la sostenibilidad y la innovación ha sido el pilar de nuestro éxito, y esperamos con entusiasmo continuar enriqueciendo la industria de la madera en los años venideros.
      </p>
      <Image
      src={imgTables}
      width={400}
      height={400}
      alt='picture tables'
      />
      </div> 
    </article>
  )
}
