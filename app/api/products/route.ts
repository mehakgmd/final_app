import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { SanityClient } from "sanity";

const client: SanityClient = createClient ({
    projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
    dataset: "production",
    apiVersion: "2023-07-30",
    useCdn: false

});
export  async function GET() {
    try{
       let response = await client.fetch(`*[_type == "products"]`);
       console.log(response);
       return NextResponse.json({response});
    }catch(error) {
        console.log((error as {message:string }).message )
        return NextResponse.json({message: "Failed"})
    }
   
};