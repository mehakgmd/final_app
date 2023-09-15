
// import { responseType } from "@/components/utils/ProductsDataArrayAndType";
// import ProductDetail from "@/components/views/ProductDetail";
// import React, { FC } from "react";


//  async function fetchPreviewData(slug:string) {
//   let res = await fetch(`https://no7le7lq.api.sanity.io/v2023-07-08/data/query/production?query=*%5B_type%20%3D%3D%20%22products%22%20%26%26%20slug.current%3D%3D%20%22${slug}%22%5D`)
//   return res.json()
// };

// const Catalog= async ({ params }:{ params: { slug: string } }) => {
  
// let Data :responseType  = await fetchPreviewData(params.slug)
//  return(
//    <div>
//     <ProductDetail item={Data.result[0]}/>
//    </div>
//    )
// };

// export default Catalog





import React, { FC } from 'react'

const Catalog: FC<{params: {slug : string}}> = ({params}) => {
    return (
    <div>{params.slug}</div>
  )
}

export default Catalog