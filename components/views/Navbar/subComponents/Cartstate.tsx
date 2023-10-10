import { cartContext } from '@/global/Context'
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { BsCart2 } from 'react-icons/bs'

const Cartstate = () => {
  let {cartArray} = useContext(cartContext)
 const [quantity, setQuantity] = useState(0);

 useEffect(()=>{
  if(cartArray.length !== 0){
setQuantity(cartArray.length)
  }
 })

    return  ( 
    <Link href={"/cart"} className="relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
      <div className="w-4 h-4 absolute top-1 right-2 bg-red-400 text-xs font-light rounded-full flex justify-center item-center">
      {quantity}

      </div>
      <BsCart2 size={24}/>
     
    </Link>
    )
    
}

export default Cartstate