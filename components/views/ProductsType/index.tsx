import React from 'react'
import Image from 'next/image'
import { event1, event2, event3 } from '@/components/assets'

export default function ProductsType() {
  return (
    <div className="py-16 px-2 space-y-5">
      <div className='text-center space-y-3'>
        <p className='text-blue-800 text-sm font-bold'>PROMOTIONS</p>
        <h3 className='text-3xl text-black-800 font-bold'>Our Promotions Events</h3>
        </div>
        {/* grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 text-black-800'>
        {/* first grid */}
        <div className="w-full flex flex-col items-center justify-between sm:flex-row items-center justify-between sm:flex-row col-span-1 md:col-span-2 bg-cat1 px-12">
          <div className="max-w-[13rem] py-8">
            <h4 className='text-3xl font-bold'>Get Up To 60%</h4>
            <p className='text-xl'>For the summer season</p>
          </div>
          <div className='w-64'>
            <Image width={1000} height={1000} src={event1} alt={'summer season'}/>
          </div>
        </div>
        {/* second grid */}
        <div className='w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-cat3'>
          <div className='p-4'>
            <p>Flex Sweatshirt</p>
            <p><del>$100.00</del>
            &nbsp;&nbsp;&nbsp;
            <b><ins>$75.00</ins></b></p>
          </div>
          <div className="w-64">
            <Image width={1000} height={1000 } src={event2} alt={'summer season'}/>
          </div>
        </div>
        {/* third grid */}
        <div className='w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-cat4 '>
        <div className="p-4">
            <p>Flex Push Button Bomber</p>
            <p><del>$225.00</del>
            &nbsp;&nbsp;&nbsp;
            <b><ins>$190.00</ins></b></p>
          </div>
          <div className="w-64 justify-center items-center">
            <Image width={1000} height={1000 } src={event3} alt={'summer season'}/>
          </div>
        </div>
        {/* fourth grid */}
        <div className='py-9 text-white w-full col-auto md:col-span-2 bg-cat2 flex flex-col justify-center items-center space-y-3'>
          <h3 className='font-bold text-4xl'>GET 30% Off</h3>
          <p>USE PROMO CODE</p>
          <button 
          aria-label='Redirect user to Dine Week End Sale'
          className='py-1 px-8 text-lg bg-[#474747] font-medium rounded-lg tracking-wider'>DINEWEEKENDSALE</button>
        </div>
      </div>
    </div>
  )
}
