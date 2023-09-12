import { oneProductType, responseType } from "@/components/utils/ProductsDataArrayAndType";
import Card from "@/components/views/Card";
import CardAll from "@/components/views/CardAll";

async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-30/data/query/production?query=++*%5B_type+%3D%3D+%22products%22+%26%26+productTypes%5B1%5D+%3D%3D+%22Male%22%5D`, {
    next: {
      revalidate: 60
    }
  });
  if (!res.ok) {
    throw new Error("Failed to fetch")
  }
  
  return res.json();
}



const Male = async ({params}: {params : {ftype: string }}) => {
  let res : responseType = await fetchAllProductsData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-3">
      {res.result.map((items: oneProductType, index: number)=> (
      <CardAll key={index} singleProductData={items} />
    ))}</div>
  )
} 
export default Male