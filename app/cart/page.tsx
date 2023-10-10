import CartComp from "@/components/views/cartParent/cartChild"
import ContextWrapper from "@/global/Context"

 async function fetchAllStoreProducts(){
  let res = await fetch(
    `https://mtojl9mk.api.sanity.io/v2023-07-30/data/query/production?query=++*%5B_type+%3D%3D+"products"%5D`,{
      cache: "no-store",
    }
  )

   return res.json()
 
}

const Cart = async () => {
  let allProductsOfStore = await fetchAllStoreProducts()

  return (
  <ContextWrapper> 
   <CartComp allProductsOfStore = {allProductsOfStore.result}/>
   </ContextWrapper>
  )
}

export default Cart