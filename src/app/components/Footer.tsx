"use client"
import {useState} from 'react';
const email = 'Aserradero Alonso'
const tels = ['+1234567890']
export default function App() {
 

  return (
    <div className='m-auto max-w-[1000px] flex justify-between items-center py-4 '>
      
     <div className='text-gray-300'>
     <h3>Copyrights © 2019 All Rights Reserved Aserradero Alonso</h3>
     {/*  */}
      <h4>
      Powered by <a className='hover:text-white' href="https://www.instagram.com/tobias_marketing_hub/?igshid=MzRlODBiNWFlZA%3D%3D." target='_blank' >Marketing Hub</a>
      </h4>
     </div>

      <div className="">
        {email}
        {tels.map((tel, index) => (<a key={index}> {tel} </a>))}
      </div>

    </div>
  );
}

