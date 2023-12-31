import { oneProductType } from "@/components/utils/ProductsDataArrayAndType"
import CardAll from "../CardAll";
interface propsType {
  ProductsArray: oneProductType[];
}
export default async function AllProductsCompo({
  ProductsArray,
}: propsType) {
  return (
    <div className="content-center justify-center grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3 gap-4">
      {ProductsArray &&
        ProductsArray.map((product, index: number) => (
          <CardAll singleProductData={product} key={index} />
        ))}
    </div>
  );
}