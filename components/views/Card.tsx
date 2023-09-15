
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import React, { FC } from 'react'
import { oneProductType } from '../utils/ProductsDataArrayAndType'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source)
}


const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {
    return (
        <Link href={`/catalog/${singleProductData.slug.current}`}>

        <div className='max-w-sm min-w-[24rem] space-y-3 select-none hover:scale-105 duration-300'>
            <div className='relative w-full'>

                <div className='absolute inset-0 z-10' />
                <Image width={800} height={800} src={urlFor(singleProductData.image[0]).width(800).height(800).url()} alt={singleProductData.image[0].alt} />
            </div>
            <div className='space-y-3 text-black-600 font-semibold text-lg select-none'>
                    <h6>{singleProductData.productName}</h6>
                    <p>${singleProductData.price}</p>
            </div>
        </div>
                        </Link>

    )
}

export default Card