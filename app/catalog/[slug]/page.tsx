import { oneProductType, responseType } from '@/components/utils/ProductsDataArrayAndType'
import ProductDetail from '@/components/views/ProductDetail'
import ContextWrapper from '@/global/Context'
import React, { FC } from 'react'
import { Metadata } from 'next';

// metadata genrator
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    const product = await fetch(`https://mtojl9mk.api.sanity.io/v2023-05-26/data/query/production?query=*[_type == 'products']`).then((res: any) => res.json());
    const titleToSet: oneProductType = product.result.find((item: oneProductType) => item.slug.current == slug);

    return {
        title: titleToSet.productName,
        description: titleToSet.description,
    };
}

// fetch particular data of product using slug

async function fetchPreviewData(slug: string){
  let res = await fetch(`https://mtojl9mk.api.sanity.io/v2023-07-30/data/query/production?query=*%5B_type+%3D%3D+%22products%22+%26%26+slug.current+%3D%3D+%22${slug}%22%5D`)
return res.json()
};

 // will make static pages of every product

export async function generateStaticParams(){
  let res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-30/data/query/production?query=++*%5B_type+%3D%3D+"products"%5D`
  ).then((res:any)=>res.json())

   return res.result.map((item:oneProductType) => { slug: item.slug})
 
}


const Catalog =async ({params} :{params:{slug : string} }) => {
    let data: responseType =  await fetchPreviewData(params.slug)
    return (
    <div>
      <ContextWrapper>
      <ProductDetail item={data.result[0]}/>
      </ContextWrapper>
    </div>
  )
}

export default Catalog