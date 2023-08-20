import { HeroGirlimg } from "@/components/assets"
import { image } from "@/components/assets"
import { Bastel } from "@/components/assets"
import { Versace } from "@/components/assets"
import { Instyle } from "@/components/assets"
import Image from "next/image"
import { BsCart2 } from "react-icons/bs"
const Hero = () => {
    const btnText = "Start\n Shopping"
    return (
        <div className="py-5 flex justify-between items-center px-2">
            {/* Right Side */}
            <div className="space-y-7 max-w-sm">
                <button
                aria-label="redirect the user to sale page"
                className= "rounded-md bg-primaryWhite text-blue-900 font-medium px-4 py-2"> Sale 70%</button>
                <h1 className=" text-4xl md:text-6xl text-black-800 font-bold">An Industrial Take on StreetWear</h1>
                <p className="text-black-800">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
</p>
                <button
                aria-label="redirect the user to sale page"
                className= "flex gap-3 items-center rounded-sm text-lg ring-slate-800 bg-gray-800 text-white font-semibold py-3 px-5"> 
                <BsCart2 size={24}/>
                <p className="whitespace-pre leading-4">
                    {btnText}
                </p>
                 </button>
                 <div className="flex gap-3">
                    <div className=" w-14 md:w-28">
                 <Image width={100} height={100} src={image} alt={"bazaar"} />
                 </div>
                 <div className="w-14 md:w-28">
                    <Image width={100} height={100} src={Bastel} alt={"bastel"} />
                    </div> 
                 <div className="w-14 md:w-28">
                    <Image width={100} height={100} src={Versace} alt={"versase"} />
                    </div>
                 <div className="w-14 md:w-28" >
                    <Image width={100} height={100} src={Instyle} alt={"instyle"} />
                    </div>
                 </div>
            </div>
        {/* Left Side  */}
            <div className="hidden md:flex bg-primaryWhite rounded-full">
            <Image src={HeroGirlimg} alt="heroimg" />
            </div>

        </div>
    )
}
export default Hero