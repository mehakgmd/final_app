"use client"
import {  BsCart2, BsSearchHeart } from "react-icons/bs"
import { HiOutlineChevronDown } from 'react-icons/hi'
import Image from "next/image"
import Link from "next/link"
import {NavbarArray, NavbarItemType} from '@/components/utils/NavbarArrayandTypes'
import DropDown from "./subComponents/DropDown"
import { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { GiHamburgerMenu } from "react-icons/gi"
import Expand from "./subComponents/Expand"
export default function Navbar() {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [cartItemNumebr, setCartItemNumber,] = useState<number>(0)
return (
  <div className="sticky top-0 background-blur-lg bg-gradient-to-tr from-white via-[#ffffffde] to-opacityDownColor z-20">
  <div className=" py-5 flex justify-between items-center space-x-12">
    <Link className="w-36 py-2 flex-shrink-0" href={"/"}>
    <Image width={500} height={500} src={"/Logo.webp"} alt={"Logo"}/>
   
    </Link>
    <div className="hidden lg:flex justify-between items-center w-full ">
    <ul className="flex space-x-4 font-medium text-lg text-black-950">
      {NavbarArray.map((item: NavbarItemType, index: number) => (
      <li key={index} className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group">
      <Link href={item.href} >{item.label}</Link>
      {item.isDropDown ? <HiOutlineChevronDown className="mt-1 -rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
        {item.isDropDown && <div className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}>
        <DropDown item={item} />
                                    </div>}
                                </li>
                            ))}
                        </ul>

  <div className=" border flex items-center text-grey-600 px-3 rounded-md">
    <BsSearchHeart/>
    <input
     type="Search"
      className="focusoutline-none pl-2 pr-5 py-1  w-80" 
      placeholder="Search in Our Store "
       />
  </div>
    <div className="relative w-11 h-11 bg-gray-300 rounded-full flex items-center justify-center">
      <div className="w-4 h-4 absolute top-1 right-2 bg-red-400 text-xs font-light rounded-full flex justify-center item-center">
        {cartItemNumebr}
      </div>
      <BsCart2 size={24}/>
    </div>
    </div>
    <div className="cursor-pointer" onClick={()=> setNavbarOpen(!isNavbarOpen)}>
        {isNavbarOpen ?
            <div className="flex lg:hidden">
    <IoMdClose size={29}/>
    </div>
    :
    <div className="flex lg:hidden" >
         <GiHamburgerMenu size={25}/>
       </div>
    }
    </div>
</div>
  {   
 isNavbarOpen && <MobileNavbar/>}
  </div>
  )
}


export  function MobileNavbar() {
  return (
   
        <div className="w-full px-6 py-4 bg-gray-100">
            {
                NavbarArray.map((item: NavbarItemType, index: number)=> {
                    return (
              
                            <div key={index}>
                                <Expand item={item}/>
                    </div>
                       
                    )
                })
            }
        </div>
       
  )
}