import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import { oneProductType, responseType } from "@/components/utils/ProductsDataArrayAndType";
import Hero from "@/components/views/Hero";
import Jewellery from "@/components/views/Jewellery";
import Newsletter from "@/components/views/Newsletter";
import ProductCarousel from "@/components/views/ProductCarousel";
import ProductsType from "@/components/views/ProductsType";

async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-07-03/data/query/production?query=*[_type == "products"]`, {
    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}

export default async function Home() {
  let { result }: responseType = await fetchAllProductsData();
  return (
    <div className="overflow-hidden">
       {/* <Hero />
      <ProductsType /> */}
      {/* <ProductCarousel ProductData={result} />  */}
      {/* <Jewellery />
      <Newsletter />  */}
    </div>
  )
}