import Image from 'next/image'
const images = [
  {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0003.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0004.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0005.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0006.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0007.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0008.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0009.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0010.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0011.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0012.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0013.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0014.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0015.jpg' 
  },
   {
    name:'tables',
    description: 'Board stowage',
    rute: '/images/IMG-20230905-WA0016.jpg' 
  },
   

]


import { Satisfy } from "next/font/google";

//const comfortaa = Comfortaa({
  const satisfy = Satisfy({ subsets: ["latin"], weight: "400" });

export default function Galery() {
  return (
    <div className='grid place-content-center min-h-screen mb-10' id='galery'>
      <h1 className={`${satisfy.className} text-[#206caf] text-4xl text-center py-6 `}>Galeria </h1>

      <ul className=' max-w-[1150px] flex flex-wrap gap-2 place-content-center auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))]'> 
        {images.map(({name, rute, description})  => (
          
            <li  key={rute} className='relative min-h-[230px] min-w-[230px] max-h-[260px] max-w-[260px] shadow-white shadow-sm rounded-xl overflow-hidden'>
              <Image
              src={rute}
              alt={description}
              layout="fill"
          objectFit="cover"
          
              
              />
            </li>
          
        ))}
      </ul>
    </div>
  )
}
