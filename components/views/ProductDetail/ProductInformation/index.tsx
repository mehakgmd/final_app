import { oneProductType } from "@/components/utils/ProductsDataArrayAndType"
import { FC } from "react"
import PortableText from "react-portable-text"

const ProductInformation: FC<{item: oneProductType}> = ({item}) => {
    return( 
<div className="mt-20">
      <div className="relative py-14 px-2 border-b border-gray-400">
        <h2 className="top-0 absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50">
          OVERVIEW
        </h2>
        <p className="font-bold text-xl">Product Information</p>
      </div>
      <div className="text-black-700">
        <div className="flex px-2 py-8">
          <div className="w-80">
            <h3 className="font-bold">PRODUCT DETAILS</h3>
          </div>
          <p>
            <PortableText content={item.description}/>
          </p>
        </div>
        <div className="flex px-2 py-8">
          <div className="w-80">
            <h3 className="font-bold">PRODUCT CARE</h3>
          </div>
          <ul className="list-disc font-semibold">
            <li>Hand Wash using cold water.</li>
            <li>Do not use bleach.</li>
            <li>Hang it to dry.</li>
            <li>Iron on low temperature.</li>
          </ul>
        </div>
      </div>
    </div>
    )
}
export default ProductInformation