// "use client"

// import { imagesType , oneProductType} from "@/components/utils/ProductsDataArrayAndType";
// import ImageUrlBuilder  from "@sanity/image-url";
// import Image from "next/image";
// import { FC, useState } from "react"
// import { client } from "@/sanity/lib/client";
// import { BsCart2 } from "react-icons/bs";
// // import { useDispatch } from "react-redux";
// // import { cartActions } from "@/store/slice/cartSlice";
// // import toast from 'react-hot-toast';




// const builder: any = ImageUrlBuilder(client);

// function urlFor(source: any){
//   return builder.image(source)
// }


// const ProductDetail: FC<{item: oneProductType}> =({item})=>{
//  const [imageForPreviewForSelected, setImageForPreviewForSelected] =useState <string>(item.image[0]._key)
//  const [quantity, setQuantity] = useState(1)
// function incrementTheQuantity() {
//   setQuantity(quantity + 1)
// }

// function decrementTheQuantity() {
//   if(quantity !== 0){
//     setQuantity(quantity - 1)
//   }
// }

// const dispatch = useDispatch()
//   const addItem = ()=>{
//     dispatch(cartActions.addToCart({quantity:1}))
//     // toast.success("Product added")
//   }

//  return(
//   <div className="flex flex-col lg:flex-row justify-center items-center py-7">
//     {/* left */}
//     <div className="flex gap-x-4 md:gap-x-8">
//       {/* left */}
//       <div className="space-y-4" >
//         {
//         item.image.map((subItem: imagesType, index:number) =>(
//        <div key={index} className="w-16 md:w-24" onClick={()=> setImageForPreviewForSelected(subItem._key)}>
// <Image width={1000} height={1000} alt={subItem.alt} src={urlFor(subItem).width(1000).height(1000).url()}/>
//        </div>
//         ))
//         }
//       </div>
//       {/* right */}
//       <div className="w-[27rem] md:w-[33rem]flex flex-wrap-0">
// {item.image.map((subItem:imageType, index: number)=>{
//     if(subItem._key === imageForPreviewForSelected){

//   return(
//         <Image key={index} width={1000} height={1000} alt={subItem.alt} src={urlFor(subItem).width(1000).height(1000).url()} />
//         )
//       }
//   }) }
//       </div>
//     </div>
//     {/* right */}
//     <div className="p-6 space-y-8">
//       <div>
//         <h1  className="text-3xl text-gray-700">{item.productName}</h1>
//         <p className="text-pink-600 text-xl font-medium">{item.productTypes[1]}</p>
//       </div>
//       <div className="space-y-2">
//         <p className="text-lg font-semibold text-gray-700">Select Size</p>
//         <div className="flex gap-2 text-pink-600">
//         {
//           item.size.map((subItem:string,index:number)=>(
//             <div key={index} className="hover:shadow-xl font-semibold cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">{subItem}</div>
//           ))
//         }
//         </div>
//       </div>
//       <div className="flex space-x-7">
//       <p className="font-semibold text-xl text-gray-800">Quantity:</p>
//       <div className="flex gap-2 items-center text-lg">
//               <div
//                onClick={decrementTheQuantity}
//                className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full bg-gray-200">-</div>
//              <p>{quantity}</p>
//              <div
//                 onClick={incrementTheQuantity}
//                 className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800">+</div>
//             </div>
//           </div>
//            <div className="flex gap-x-8 items-center"> 


//             <button  
//             onClick={addItem}
//             className="flex items-center text-white bg-gray-900 border border-gray-500 px-4 py-2">
//               <BsCart2 />
//               &nbsp;
//               &nbsp;
//               Add to Cart
//               </button>


//               <p className="text-2xl font-semibold">${item.price}{".00"}</p>
              
//       </div> 
//     </div>
//   </div>
// )

// }

// export default ProductDetail