import Image from 'next/image'
import { client } from '@/lib/sanityClient'
import Hero from '@/components/views/Hero'
import ProductsType from '@/components/views/ProductsType'
import BASE_PATH_FORAPI from '@/components/shared/BasePath';
import ProductCarousel from '@/components/views/ProductCarousel';

// export const getProductData = async () => {
// const res = await client.fetch(`*[_type=="product"]{
//   title,
//   description
// }`);
// return res
// }
// interface IProduct {
//   title:string
//   description:string
// }
// export default async function Home() {
//   // const data: IProduct[] = await getProductData()
 
//   return (
//     // <div>
//     //  {data.map((item) => (
//     //   <h1>{item.title}</h1>
//     //  ))}
//     // </div>
//   )
// }
async function fetchAllProductData(){
  let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);
  if(!res.ok){
    throw new Error("Failed")
  }
  return res.json();
}

export default async  function Home(){
  let  {response} = await fetchAllProductData();
  
  return (
    <div>
      {/* <Hero/>
      <ProductsType/> */}
      <ProductCarousel ProductData={response}/>
         </div>
  )
}
