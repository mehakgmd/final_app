import { NextRequest, NextResponse } from "next/server";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";


export  async function GET(request:NextRequest) {
   const originalData: Array<oneProductType> = []; 
   const url = request.nextUrl.searchParams;
  
   let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-07-03/data/query/production?query=*[_type == "products"]`) 
    let dataFrom_API = await res.json()
  originalData.push(...dataFrom_API.result)
  
  if(url.has("start") || url.has("end")){
   if(originalData[Number(url.get("start"))]){
    let productArray = originalData.slice(Number(url.get("start")), Number(url.get("end")))
return NextResponse.json({productArray})
}
return NextResponse.json({productArray: "notfound"})
}
    return NextResponse.json({originalData})
   
   
};


 //    let response = await client.fetch(`*[_type == "products"]`);
    //   return NextResponse.json({response});