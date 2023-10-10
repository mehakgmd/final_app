import {db, cartTable} from '@/lib/drizzle';
import { and, eq } from 'drizzle-orm';
import {NextRequest, NextResponse} from "next/server";
import {v4 as uuid} from "uuid"
import {cookies} from "next/headers"
export const  GET = async (request: NextRequest) => {
    try{
        const allCartData = await db.select().from(cartTable);
        return NextResponse.json({allCartData})
    }catch(error){
        console.log("error: ", (error as {message:string}).message)
        return NextResponse.json({error })
    }
}


export const  POST = async (request:NextRequest) => {
   let req = await request.json();
   console.log(req)
    try{
        if(req.product_id&&req.quantity&&req.user_id&&req.price){
   let response = await  db.insert(cartTable).values(req).returning();
   return NextResponse.json({response})
}else{
    throw Error("Please put product quantity and user_id")
}
   }catch(error){
    console.log("error: ", (error as {message:string}).message)
    return NextResponse.json({error})
}
}


export async function PUT(request:NextRequest) {
    let req = await request.json();

    try{
let response = await db.update(cartTable).set(req).
where(
  and(eq(cartTable.product_id,req.product_id),eq(cartTable.user_id,req.user_id))
  ).returning(); 

return NextResponse.json({response})
    }catch(error){
        console.log("error: ", (error as {message:string}).message)
        return NextResponse.json({error}) 
    }
}

export async function DELETE(request : NextRequest) {
    let url = request.nextUrl.searchParams;
    try{
        if(url.has("product_id")&&url.has("user_id")){
    let response = await  db.delete(cartTable).where(
       and(eq(cartTable.product_id,(url.get("product_id")as string)),
    eq(cartTable.user_id,(url.get("user_id")as string)))).returning();
   console.log(response)
    return NextResponse.json({response})
}
    }catch(error){
        console.log("error: ", (error as {message:string}).message)
        return NextResponse.json({error}) 
    }
}
