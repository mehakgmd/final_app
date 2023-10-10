"use client"
import Image from "next/image";
import {  BsCart2 } from "react-icons/bs"
import { imagesType, oneProductType } from '@/components/utils/ProductsDataArrayAndType'
import { client } from '@/lib/sanityClient'
import React, { FC, useContext, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import ContextWrapper from "@/global/Context";
import { cartContext } from "@/global/Context";
import PortableText from "react-portable-text";
import toast, { Toaster } from "react-hot-toast";
import ProductInformation from "./ProductInformation";



const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source)
}
const ProductDetail: FC<{item: oneProductType}> = ({item}) => {
  let { cartArray, userData, dispatch } = useContext(cartContext)

  const [imageForPreviewForSelected, setImageForPreviewForSelected] = useState<string>(item.image[0]._key);  
  const [quantity, setQuantity] = useState(1);
function incrementTheQuantity(){
  setQuantity(quantity + 1)
}
function decrementTheQuantity(){
  if(quantity !== 0 ){
  setQuantity(quantity - 1)
  }
}
function handleAddToCart() {
  let isExist = cartArray.some((elem: any) => elem.product_id === item._id)
  if(userData){
  let dataToAddInCart = {
    product_id: item._id,
    quantity: quantity,
    user_id: userData.uuid,
    price: item.price
  };
  if(!isExist){
  dispatch( "addToCart", dataToAddInCart);
}else{
  dispatch( "updateCart", dataToAddInCart);
}
  notification(item.productName);
}else{
notificationError("Please Login First");
}
}

const notification = (title: string) => {
  toast(` ${quantity} ${title} added to Cart`, {
    icon: '👏',
    position: "top-right"
  })
};
const notificationError = (title: string) => {
  toast(title, {
    position: "top-right"
  })
};


  return (
  
    <div>
      <Toaster/>
    <div className="flex flex-col lg:flex-row  justify-center items-center py-10">

      {/* left */}
        <div className="flex gap-x-4 md:gap-x-8">
          {/* left */}
            <div className= "space-y-4">
              {item.image.map((subItem: imagesType, index: number) => (
                <div key={index} className="w-16 md:w-24" onClick={()=>setImageForPreviewForSelected(subItem._key)}>
                  <Image width={1000} height={1000} alt={subItem.alt} src={urlFor(subItem).width(1000).height(1000).url() }/>
                </div>
              ))}
            </div>

            {/* right */}
            <div className="w-[33rem] flex  flex-wrap-0" >
            {item.image.map((subItem: imagesType, index: number) => {
           if(subItem._key===imageForPreviewForSelected){
            return(
            <Image key={index} width={1000} height={1000} alt={subItem.alt} src={urlFor(subItem).width(1000).height(1000).url() }/>
         )
        }
          }) }
            </div>
        </div>

        {/* right */}
        <div className="p-6 space-y-8" >
          <div>
            <h1 className="text-3xl text-black-500 font-semibold">{item.productName}</h1>
            <p className="text-pink-600 text-xl font-semibold">{item.productTypes[0]}</p>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-black-800">Select Size</p>
           <div className="flex gap-2 text-pink-600">
            {
              item.size.map((subItem: string, index: number)=>(
                <div key={index} className="hover:shadow-xl font-semibold cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">{subItem}</div>
              ))
            }
            </div>
          </div>
          <div className="flex space-x-7">
           <p className="text-xl font-semibold">Quantity:</p> 
           <div className="flex gap-2 items-center text-lg">
            <div
            onClick = {decrementTheQuantity}
            className="select-none cursor-pointer flex justify-center items-center w-7 h-7 rounded-full border border-black">-</div>
<p>{quantity}</p>
<div
onClick={incrementTheQuantity}
className="select-none cursor-pointer flex justify-center items-center w-7 h-7 rounded-full border border-black">+</div>
</div>
          </div>
          <div className="flex gap-x-8 items-center">
             <button  
           
            onClick={() => handleAddToCart()}
            className="flex items-center  rounded-md text-white bg-gray-900 border border-gray-500 px-4 py-2"
         
            >
           <BsCart2/>
           &nbsp;
            Add To Cart
            </button>
<p className="text-2xl font-semibold ">${item.price}{".00"}</p>
          </div>
        </div>
        </div>
        <div>
          <ProductInformation item={item}/>
        </div>
       </div>
    
    
  )


}

export default ProductDetail


