const Newsletter = () => {
  return (
    <div className="relative text-center space-y-4 min-h-[30vh] md:h-[60vh] lg:min-h-[30rem] flex flex-col justify-center items-center">
        <h6 className="absolute md:text-[9rem] font-bold text-gray-100 text-center mx-auto -z-50">NEWSLETTER</h6>
        <h6 className="text-3xl md:text-4xl font-bold">Subscribe Our Newsletter</h6>
        <p >Get the latest information and promo offers directly</p>
        <div className="flex gap-4 flex-wrap items-center justify-center">
        <input type='text' className='border border-gray-900 py-1 px-3 md:px-4 flex flex-grow w-52 md:w-80' placeholder='Enter your Email Address'/>
        <button className='text-white bg-gray-900 rounded-md py-2 px-4'>Get Started</button>
        </div>
    </div>
  )
}

export default Newsletter
