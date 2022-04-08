import Image from 'next/image'

export default function Banner() {
  return (
      <div className="container-fluid p-4 m-4">
 <section className="relative bg-white overflow-hidden">
  <div className="py-20 md:py-28">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap xl:items-center -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
          <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">In love with Mexican?</h1>
            <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">We’re different. Our passion for true Mexican food goes beyond an obsession. We bring you the best and spiciest cuisines made by the finest Chefs in the business. So, what are you waiting for,<em> amante de la comida! </em></p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 font-medium text-center focus:ring-opacity-50 border border-red-500 rounded-md shadow-sm bg-red-600 text-white hover:bg-red-800" href="#">Book a table</a></div>
            <div className="w-full md:w-auto py-1 md:py-0"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm" href="#">Order</a></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="relative mx-auto md:mr-0 max-w-max">
            <Image className="rounded relative rounded-7xl" src="/images/banner.jpg" alt="Picture of food" width={700}
      height={500} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 </div>
              )
              }

