"use client"
import {oneProductType} from "@/components/utils/ProductsDataArrayAndType"
import React, { FC } from 'react'

const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }) => {
  return (
    <div>{ProductData[0].productName}</div>
  )
}
export  default ProductCarousel