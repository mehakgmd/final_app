import AllProductsCompo from "@/components/views/AllProducts";
async function fetchAllProductData() {
  let res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-30/data/query/production?query=++*%5B_type+%3D%3D+"products"%5D`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}
const Products = async () => {
  const ProductData = await fetchAllProductData();
  return (
    <div>
      <AllProductsCompo ProductsArray={ProductData.result} />
    </div>
  );
};
export default Products;