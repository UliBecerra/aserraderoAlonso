"use client"
import {useState} from 'react';
const email = 'Aserradero Alonso'
const tels = ['1154049512', 1163523217]
export default function App() {
 

  return (
    <div className='m-auto max-w-[1000px] flex justify-between items-center py-4 '>
     {/*  <span>
                <a href={`tel:+${TEL}`} > +{TEL}</a>
              </span> */}
     <div className='text-gray-300'>
     <h3>Copyrights © 2019 All Rights Reserved Aserradero Alonso</h3>
     {/*  */}
      <h4>
      Powered by <a className='hover:text-white' href="https://www.instagram.com/tobias_marketing_hub/?igshid=MzRlODBiNWFlZA%3D%3D." target='_blank' >Marketing Hub</a>
      </h4>
     </div>

      <div className="">
        {email}
        {tels.map((tel, index) => (<a key={index} href={`tel:+${tel}`} className='  hover:[text-shadow:1px_1px_4px_var(--tw-shadow-color)] shadow-[#5f9bce] '> {' +'}{tel} </a>))}
      </div>

    </div>
  );
}

